import { BaseError } from "./BaseError";

export class UnauthorizedError extends BaseError {
    constructor(
        message: string = "Não possui autorização" // mensagem de erro padrão caso não seja enviado um argumento
    ) {
        super(401, message)
    }
}
