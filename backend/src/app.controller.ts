import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot() {
    return {
      message: '🚀 DeLorean Trading API',
      status: 'Online',
      version: '1.0.0',
      features: [
        'Trading em tempo real',
        'Análise quantitativa com IA',
        'Portfolio management',
        'Estratégias automatizadas'
      ],
      timestamp: new Date().toISOString()
    };
  }

  @Get('health')
  getHealth() {
    return {
      status: '✅ Healthy',
      uptime: process.uptime(),
      message: '💜 Ready to trade!'
    };
  }
}
