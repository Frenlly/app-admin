import React from 'react'

import { useAuthState, Loading } from 'react-admin';

const MyPage = () => {
    const { loading, authenticated } = useAuthState();
    if (loading) {
        return <Loading />;
    }
    if (authenticated) {
        return <AuthenticatedContent />;
    } 
    return <AnonymousContent />;
};

export default MyPage;