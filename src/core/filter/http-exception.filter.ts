import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    // 先获取上下文对象
    const ctx = host.switchToHttp();
    // 获取上下文对象里面的response
    const response = ctx.getResponse();
    // 获取错误码

    const exceptionContext = exception.getResponse();

    const status = exception.getStatus();

    const message = exceptionContext ? exceptionContext : exception.message;

    const errorResponse = {
      data: {},
      message: message,
      code: -1,
    };

    response.status(status);
    response.header("Content-Type', 'application/json; charset=utf-8");
    response.send(errorResponse);
  }
}
