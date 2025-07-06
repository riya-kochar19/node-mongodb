import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogMessage } from '../models/log.model';

@Injectable({ providedIn: 'root' })
export class LogService {
  constructor(private http: HttpClient) {}

  log(level: string, message: string): void {
    this.http.post('http://localhost:8080/api/log', { level, message }).subscribe();
  }
}
