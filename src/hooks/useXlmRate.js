import { useEffect, useState } from 'react';
import { fetchXlmRate } from '../lib/rates.js';

/** Indicative XLM/NGN market rate, refreshed every 5 minutes. */
export function useXlmRate() {
  const [state, setState] = useState({ rate: null, error: null, loading: true });

  useEffect(() => {
    let controller = new AbortController();

    const load = () => {
      controller = new AbortController();
      fetchXlmRate({ signal: controller.signal })
        .then((rate) => setState({ rate, error: null, loading: false }))
        .catch((error) => {
          if (error.name !== 'AbortError') setState((s) => ({ ...s, error, loading: false }));
        });
    };

    load();
    const timer = setInterval(load, 5 * 60 * 1000);
    return () => {
      clearInterval(timer);
      controller.abort();
    };
  }, []);

  return state;
}
