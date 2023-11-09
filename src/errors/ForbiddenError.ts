import { BaseError } from "./BaseError";

export class ForbiddenError extends BaseError {
    constructor(
        message: string = "Não possui credenciais suficientes" // mensagem de erro padrão caso não seja enviado um argumento
    ) {
        super(401, message)
    }
}
