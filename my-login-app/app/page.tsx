import { FC } from "react";
import { FaGoogle } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

const Login: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Entre com a sua conta
        </h1>

        <button className="flex items-center justify-center w-full px-4 py-2 mt-6 text-white bg-gray-800 rounded-md hover:bg-gray-700">
          <FaGoogle className="w-5 h-5 mr-2" />
          Entrar com o Google
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-gray-500 bg-white">ou entre com seu e-mail</span>
          </div>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail..."
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha..."
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center w-full px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700"
          >
            <FiLogIn className="w-5 h-5 mr-2" />
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;