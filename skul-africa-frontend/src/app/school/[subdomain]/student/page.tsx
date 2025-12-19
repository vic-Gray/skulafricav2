'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { loginStudent } from '@/lib/api';
import { useAuth } from '@/contexts/AuthContext';

export default function StudentLoginPage() {
  const params = useParams();
  const router = useRouter();
  const { login } = useAuth();
  const subdomain = params.subdomain as string;
  const [admissionNumber, setAdmissionNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const authData = await loginStudent({ admissionNumber, password, subdomain });
      if (authData.student) {
        login(authData.student, 'student');
      }
      router.push(`/school/${subdomain}/student/dashboard`);
    } catch (error) {
      // Error handled by API
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="bg-dark border-neutral-800 w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-white mb-2">
            Student Login
          </CardTitle>
          <p className="text-neutral-400">
            Access your student portal
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="admissionNumber" className="block text-sm font-medium text-neutral-300 mb-2">
                Admission Number
              </label>
              <Input
                id="admissionNumber"
                type="text"
                value={admissionNumber}
                onChange={(e) => setAdmissionNumber(e.target.value)}
                placeholder="ADM123"
                required
                className="bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500 focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-300 mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500 focus:border-primary"
              />
            </div>


            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-neutral-400 text-sm">
              Don't have an account?{' '}
              <Link href={`/school/${subdomain}/student/signup`} className="text-primary hover:text-primary/80 transition-colors">
                Sign up here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
