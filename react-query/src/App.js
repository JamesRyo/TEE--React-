import logo from './logo.svg';
import './App.css';
import {QueryClient, QueryClientProvider, useQuery, useMutation, useQueryClient} from "react-query";
import {useState} from "react";

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,  // disable auto refetch on window focus
                retry: false,  // disable retries on error
                staleTime: 1000 * 60 * 5  // 5 minutes stale time for queries
            }
        }
    });

    return (
      <QueryClientProvider client={queryClient}>
          <Example />
      </QueryClientProvider>
  );
}

function Example() {
    const [username, setUsername] = useState();
    const queryClient = useQueryClient()

    const {isLoading, error, data, isFetching} = useQuery(['users'], () =>
        fetch('https://crudcrud.com/api/e88499d25ea04bf39e44b0b060807b85/users').then(res =>
            res.json()),
        {
            onSuccess: (data) => {
                setUsername(data[0].username)
            }
        }
    )

    const updateUser = useMutation((username) =>
        fetch(`https://crudcrud.com/api/e88499d25ea04bf39e44b0b060807b85/users/${data[0]._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username})
        }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('users')  // invalidate and refetch users query after mutation
            }
        }
    )

    return (
        <div>
            {
                isLoading || isFetching ? (
                    'Loading...'
                ) : error ? (
                    'An error has occurred: ' + error.message
                ) : (
                    <>
                        <h1>User</h1>
                        <p>
                            username: {data[0].username}
                        </p>
                        <p>
                            email: {data[0].email}
                        </p>
                        <form onSubmit={async (e) => {
                            e.preventDefault();
                            const {data} = await updateUser.mutateAsync(username);
                        }}>
                            Username:
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username"/>
                            <button type="submit">Update</button>
                        </form>

                    </>
                )
            }
        </div>
    )
}


export default App;
