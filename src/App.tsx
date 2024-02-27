import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './App.css';
import { withTimeout } from './utils/Promises/JavascriptPromise1';
import helloWorld from './utils/Promises/JavascriptPromise2';
import AppRoutes from './routes/Routes';
import Button from './components/Button';
import reportWebVitals from './reportWebVitals';

import {
  HALF_SECONDS_IN_MILLIS,
  ONE_SECOND_IN_MILLIS,
  TWO_SECONDS_IN_MILLIS,
} from './constants/constants';

const App: React.FC = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    // Question 1
    async function fetchData(): Promise<string> {
      return new Promise(resolve =>
        setTimeout(
          () => resolve('Promise resolved for fetchData'),
          HALF_SECONDS_IN_MILLIS
        )
      );
    }
    async function fetchDataTimeOut(): Promise<string> {
      return new Promise(resolve =>
        setTimeout(
          () => resolve('Promise resolved fetchDataTimeOut'),
          TWO_SECONDS_IN_MILLIS
        )
      );
    }

    try {
      const fetchDataWithTimeout = withTimeout(fetchData, ONE_SECOND_IN_MILLIS);
      fetchDataWithTimeout().then(console.log).catch(console.error);
    } catch (err) {
      console.log(err);
    }

    try {
      const fetchDataWithTimeoutNotResolved = withTimeout(
        fetchDataTimeOut,
        1000
      );
      fetchDataWithTimeoutNotResolved().then(console.log).catch(console.error);
    } catch (err) {
      console.log(err);
    }

    //Question 2
    const helloWorldResult = async () => {
      try {
        const resultForTrueArg = await helloWorld(true);
        console.log(resultForTrueArg);

        const resultForFalseArg = await helloWorld(false);
        console.log(resultForFalseArg);

        const resultForNoArg = await helloWorld();
        console.log(resultForNoArg);
      } catch (error) {
        console.error('rejected with error: ' + error);
      }
    };
    console.log(helloWorldResult());

    // reporting web vitals, can also send this to analytics
    reportWebVitals(console.log);
  }, []);

  return (
    <>
      <AppRoutes />
      <div className="timer-buttons-container" data-testId="app-container">
        {/* Question 5 */}
        <Link to="/react-timer">
          <Button text={t('React Timer')} className="react-timer" />
        </Link>
        {/* Questoin 6 */}
        <Link to="/mouse-timer">
          <Button text={t('Mouse Timer')} className="mouse-timer" />
        </Link>
      </div>
    </>
  );
};

export default App;
