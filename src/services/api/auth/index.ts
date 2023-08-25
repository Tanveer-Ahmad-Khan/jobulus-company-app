import { NetWorkService } from "@/services/apinetworkservice";

type Login = {
  email: string;
  password: number;
};

/**
 * Network request used to login
 * @param email user email
 * @param password user password
 * @returns user
 */
const login = ({ email, password }: Login) => {
  return new Promise((resolve, reject) => {
    NetWorkService.Post({
      url: "login",
      body: {
        email,
        password,
      },
    })
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export { login };
