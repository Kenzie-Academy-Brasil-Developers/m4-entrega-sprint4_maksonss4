import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users";

export async function updateUserService(id_params: string, data: IUserUpdate) {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.id === id_params);

  if (!account) {
    throw new Error("Usuário não encontrado");
  }

  await userRepository.update(account!.id, { ...data });

  return "Talvez deu certo";
}
