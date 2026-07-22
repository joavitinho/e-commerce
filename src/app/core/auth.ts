import {signal} from "@angular/core";
//!Define valor inicial do usuarioLogado como (false), indicando que o usuário não está logado.
export const usuarioLogado = signal(false);

//!Difine Sinal usuáriLogado como (true), permitindo que o usuário esteja logado, e (false) para indicar que o usuário não está logado.
export function login(){
    usuarioLogado.set(true);
}
//!Difine Sinal usuáriLogado como (false), permitindo que o usuário esteja deslogado, e (true) para indicar que o usuário está logado.
export function logout(){
    usuarioLogado.set(false);
}
