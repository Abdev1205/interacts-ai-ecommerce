'use client';

import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

const Dashboard = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const roleFromQuery = searchParams.get('role'); // Extract role from query params

  useEffect(() => {
    if (isLoaded && user) {
      const userRole = user?.publicMetadata?.role;

      // If the user already has a role, redirect to their role-based dashboard
      if (userRole) {
        router.push(`/dashboard/${userRole}`);
      } else if (roleFromQuery) {
        // If user does not have a role, redirect to role-initiate page with role from query param
        router.push(`/role-init?role=${roleFromQuery}`);
      }
    }
  }, [isLoaded, user, roleFromQuery, router]);

  if (!isLoaded || !isSignedIn) {
    return <div>Loading...</div>;
  }

  return null; // No need to show content, only handle redirection
};

export default Dashboard;
