import { constants } from '@nikshay-setu-v3-monorepo/constants';
import { fetchUserRequest } from '@nikshay-setu-v3-monorepo/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';

export function NxWelcome({ title }: { title: string }) {
  const [storedValue, setLoaclStorage] = useState<string>('');
  const [asyncStorageVal, setAsyncStorageVal] = useState<string>('');
  const [cookies, setCookie] = useCookies(['token']);
  const dispatch = useDispatch();
  const { user, error } = useSelector(
    (state: { user: { user: any; error: any } }) => state?.user
  );
  const storeData = async (value: any) => {
    try {
      setCookie('token', value);
    } catch (e) {
      // saving error
    }
  };
  const fetchData = async () => {
    try {
      const value = await cookies.token;

      setAsyncStorageVal((value && value) || '');
    } catch (e) {
      setAsyncStorageVal('erorr');
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
    html {
      -webkit-text-size-adjust: 100%;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
      line-height: 1.5;
      tab-size: 4;
      scroll-behavior: smooth;
    }
    body {
      font-family: inherit;
      line-height: inherit;
      margin: 0;
       background:#000000
    }
   `,
        }}
      />
      <div className='wrapper'>
        <div className='container'>
          <div style={{ color: '#ffffff' }}>
            <h1 style={{ color: '#ffffff' }}>
              <span> Hello there, </span>
              Welcome {title + asyncStorageVal} 👋
            </h1>
          </div>
          <span style={{ color: '#ffffff' }}>
            Storage val : {asyncStorageVal}
          </span>
          <p style={{ color: '#ffffff' }}>
            API Key: {process.env.NX_PUBLIC_API_URL}
          </p>
          <p style={{ color: '#ffffff' }}>
            Database Host: {process.env.NX_PUBLIC_URL}
          </p>
          <input
            value={storedValue}
            onChange={(v) => setLoaclStorage(v.target.value)}
            style={{ color: 'black' }}
          />

          <button
            onClick={() => {
              storeData(storedValue);
              fetchData();
            }}
          >
            Save to cookies
          </button>
          <button
            onClick={() => {
              dispatch(fetchUserRequest());
            }}
          >
            Call api
          </button>
          <button
            onClick={() => {
              constants();
            }}
          >
            env
          </button>
        </div>
        <div>
          {user?.users?.map(
            (
              v: {
                firstName:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
                company: {
                  name:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                };
                gender:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
                phone:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
              },
              i: any
            ) => {
              return (
                <div style={{ color: 'wheat', border: '1px solid white' }}>
                  <h5>First Name :- {v?.firstName}</h5>
                  <h4>Company :- {v?.company?.name}</h4>
                  <h5>Gender :- {v?.gender}</h5>
                  <h6>Phone :- {v?.phone}</h6>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}

export default NxWelcome;
