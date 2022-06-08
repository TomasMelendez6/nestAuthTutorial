import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private autService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.autService.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.autService.signin(dto);
  }
}
