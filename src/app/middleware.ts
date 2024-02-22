import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';

export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        console.log('request', request);
    },
    {
        callbacks: {
            authorized: ({ token }) => false
        },
        pages: {
            signIn: '/login',
            error: '/error'
        }
    }
);

export const config = { matcher: ['/dashboard'] };
