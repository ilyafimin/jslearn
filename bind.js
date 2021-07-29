//let bound = func.bind(context, [arg1], [arg2], ...);
//Это позволяет привязать контекст this и начальные аргументы функции.

//1
//askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//2
//askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?
