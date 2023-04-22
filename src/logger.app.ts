/**
 * Clase principal del logger, es muy simple pero funcional.
 */
export class Logger {
    //Establecemos el patrón del mensaje, reseteando el estilo del texto al final con el código ANSI 0 
    private preset: string = `[%s] [%s] [%s] %s\x1b[0m`;
    //Nombre o contexto del logger
    private name: string;
    //Colores
    private color = {
        cyan: "\x1b[36m",
        purple: "\x1b[35m",
        red: "\x1b[31m",
        yellow: "\x1b[33m"
    }
    /**
     * Método que construye un logger que imprimirá el nombre en cada log
     * @param name Nombre que imprimirá en cada log, simplemente para diferenciar
     */
    constructor(name: string) {
        this.name = name;
    }
    /**
     * Imprime un log por consola, formateando esta con colores si la consola lo permite.
     * @param logMessage Mensaje que se imprimirá
     * @param logType Tipo de log
     */
    log(logMessage: any, logType: LogType): void {
        /*Si el tipo de log es debug y la variable de entorno de NODE_ENV coincide con production, 
         *salimos el método sin imprimir nada
         */
        if (logType == LogType.DEBUG && process.env.NODE_ENV?.match("production")) {
            return;
        }
        let message = this.preset;
        //Dependiendo del tipo de log, usamos el codigo de escape ANSI correspondiente al color
        switch (logType) {
            //Cyan
            case LogType.INFO:
                message = this.color.cyan + message;
                break;
            //Rojo
            case LogType.ERROR:
                message = this.color.red + message;
                break;
            //Amarillo
            case LogType.WARNING:
                message = this.color.yellow + message;
                break;
            //Morado
            case LogType.DEBUG:
                message = this.color.purple + message;
                break;
        }
        //Imprimimos el mensaje
        console.log(message, this.name, LogType[logType], new Date().toLocaleString(), logMessage);
        //Referencia formateado ANSI: https://en.wikipedia.org/wiki/ANSI_escape_code
    }
    /**
     * Imprime un log de información
     * @param logMessage Mensaje
     */
    info(logMessage: any) {
        console.log(this.color.cyan + this.preset, this.name, LogType[LogType.INFO], new Date().toLocaleString(), logMessage);
    }

    /**
     * Imprime un log de error
     * @param logMessage Mensaje
     */
    error(logMessage: any) {
        console.log(this.color.red + this.preset, this.name, LogType[LogType.ERROR], new Date().toLocaleString(), logMessage);
    }

    /**
     * Imprime un log de aviso
     * @param logMessage Mensaje
     */
    warning(logMessage: any) {
        console.log(this.color.yellow + this.preset, this.name, LogType[LogType.WARNING], new Date().toLocaleString(), logMessage);
    }

    /**
     * Imprime un log de debug
     * @param logMessage Mensaje
     */
    debug(logMessage: any) {
        if (process.env.NODE_ENV?.match("production")) {
            return;
        }
        console.log(this.color.purple + this.preset, this.name, LogType[LogType.DEBUG], new Date().toLocaleString(), logMessage);
    }
}
/**
 * Todos los tipos de logs que maneja el logger.
 */
export enum LogType {
    INFO,
    ERROR,
    WARNING,
    DEBUG
}