import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

  // Base URL for the REST API
  private readonly baseUrl = 'http://localhost:3000/api';

  /**
   * Retrieves all trips.
   */
  public getTrips(): Observable<Trip[]> {
    return this.http
      .get<Trip[]>(`${this.baseUrl}/trips`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Retrieves a single trip by its trip code.
   */
  public getTrip(tripCode: string): Observable<Trip[]> {
    return this.http
      .get<Trip[]>(`${this.baseUrl}/trips/${tripCode}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Adds a new trip after validating required fields.
   */
  public addTrip(formData: Trip): Observable<Trip> {

    if (!this.validateTrip(formData)) {
      return throwError(() => new Error('Trip validation failed.'));
    }

    return this.http
      .post<Trip>(`${this.baseUrl}/trips`, formData)
      .pipe(catchError(this.handleError));
  }

  /**
   * Updates an existing trip after validating required fields.
   */
  public updateTrip(formData: Trip): Observable<Trip> {

    if (!this.validateTrip(formData)) {
      return throwError(() => new Error('Trip validation failed.'));
    }

    return this.http
      .put<Trip>(`${this.baseUrl}/trips/${formData.code}`, formData)
      .pipe(catchError(this.handleError));
  }

  /**
   * Authenticates an existing user.
   */
  public login(user: User, passwd: string): Observable<AuthResponse> {
    return this.handleAuthAPICall('login', user, passwd);
  }

  /**
   * Registers a new user.
   */
  public register(user: User, passwd: string): Observable<AuthResponse> {
    return this.handleAuthAPICall('register', user, passwd);
  }

  /**
   * Shared helper method used for login and registration.
   */
  private handleAuthAPICall(
    endpoint: string,
    user: User,
    passwd: string
  ): Observable<AuthResponse> {

    const formData = {
      name: user.name,
      email: user.email,
      password: passwd
    };

    return this.http
      .post<AuthResponse>(`${this.baseUrl}/${endpoint}`, formData)
      .pipe(catchError(this.handleError));
  }

  /**
   * Performs basic client-side validation before
   * sending trip data to the server.
   */
  private validateTrip(trip: Trip): boolean {

    if (!trip) {
      return false;
    }

    return !!(
      trip.code?.trim() &&
      trip.name?.trim() &&
      trip.resort?.trim() &&
      trip.perPerson?.trim() &&
      trip.description?.trim()
    );
  }

  /**
   * Centralized HTTP error handling.
   */
  private handleError(error: HttpErrorResponse): Observable<never> {

    let errorMessage = 'An unexpected error occurred.';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      errorMessage = `Server Error (${error.status}): ${error.message}`;
    }

    console.error(errorMessage, error);

    return throwError(() => new Error(errorMessage));
  }

}