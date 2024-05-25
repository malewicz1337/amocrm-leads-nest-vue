// src/amocrm/app.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  private apiUrl = 'https://tildes08keypad.amocrm.ru/api/v4';

  private token: string;

  constructor() {
    this.token = process.env.AMOCRM_TOKEN || '';
    if (!this.token) {
      console.error('AMOCRM_TOKEN is not set in environment variables');
    }
  }

  public async getUserById(userId: number) {
    let response: any;

    try {
      response = await axios.get(`${this.apiUrl}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
    } catch (error) {
      console.error(
        'Error fetching user:',
        error.response?.data || error.message,
      );
      return {
        message: 'Error',
        error: error.response?.data || error.message,
      };
    }

    return response.data;
  }

  public async getPipelines() {
    let response: any;

    try {
      response = await axios.get(`${this.apiUrl}/leads/pipelines`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
    } catch (error) {
      console.error(
        'Error fetching pipelines:',
        error.response?.data || error.message,
      );
      return {
        message: 'Error',
        error: error.response?.data || error.message,
      };
    }

    return response.data;
  }

  public async getLeads(query?: string) {
    let url = `${this.apiUrl}/leads?with=contacts`;
    if (query && query.length >= 3) {
      url += `&query=${query}`;
    }

    let response: any;

    try {
      response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
    } catch (error) {
      console.error(
        'Error fetching leads:',
        error.response?.data || error.message,
      );
      return {
        message: 'Error',
        error: error.response?.data || error.message,
      };
    }
    return response.data;
  }
}
