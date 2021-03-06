/* tslint:disable */
/* eslint-disable */
/**
 * SQE API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UserUpdateRequestDTO
 */
export interface UserUpdateRequestDTO {
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequestDTO
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequestDTO
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequestDTO
     */
    organization?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequestDTO
     */
    forename?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequestDTO
     */
    surname?: string | null;
}

export function UserUpdateRequestDTOFromJSON(json: any): UserUpdateRequestDTO {
    return UserUpdateRequestDTOFromJSONTyped(json, false);
}

export function UserUpdateRequestDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserUpdateRequestDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'password': json['password'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'organization': !exists(json, 'organization') ? undefined : json['organization'],
        'forename': !exists(json, 'forename') ? undefined : json['forename'],
        'surname': !exists(json, 'surname') ? undefined : json['surname'],
    };
}

export function UserUpdateRequestDTOToJSON(value?: UserUpdateRequestDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'password': value.password,
        'email': value.email,
        'organization': value.organization,
        'forename': value.forename,
        'surname': value.surname,
    };
}


