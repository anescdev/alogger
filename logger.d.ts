/**
 * Clase principal del logger, es muy simple pero funcional.
 */
export declare class Logger {
    private preset;
    private name;
    private color;
    /**
     * Método que construye un logger que imprimirá el nombre en cada log
     * @param name Nombre que imprimirá en cada log, simplemente para diferenciar
     */
    constructor(name: string);
    /**
     * Imprime un log por consola, formateando esta con colores si la consola lo permite.
     * @param logMessage Mensaje que se imprimirá
     * @param logType Tipo de log
     */
    log(logMessage: any, logType: LogType): void;
    /**
     * Imprime un log de información
     * @param logMessage Mensaje
     */
    info(logMessage: any): void;
    /**
     * Imprime un log de error
     * @param logMessage Mensaje
     */
    error(logMessage: any): void;
    /**
     * Imprime un log de aviso
     * @param logMessage Mensaje
     */
    warning(logMessage: any): void;
    /**
     * Imprime un log de debug
     * @param logMessage Mensaje
     */
    debug(logMessage: any): void;
}
/**
 * Todos los tipos de logs que maneja el logger.
 */
export declare enum LogType {
    INFO = 0,
    ERROR = 1,
    WARNING = 2,
    DEBUG = 3
}
