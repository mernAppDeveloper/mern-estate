import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignupScreen() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleOnchange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const dataResponse = await response.json();
      if (dataResponse.success === false) {
        setLoading(false);
        setError(dataResponse.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name=""
          id="username"
          placeholder="username"
          className="border p-3 rounded-lg"
          onChange={handleOnchange}
        />
        <input
          type="email"
          name=""
          id="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          onChange={handleOnchange}
        />
        <input
          type="password"
          name=""
          id="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          onChange={handleOnchange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? 'loading...' : 'Sign up'}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className="text-blue-700">Sign in</span>
        </Link>
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </div>
    </div>
  );
}
