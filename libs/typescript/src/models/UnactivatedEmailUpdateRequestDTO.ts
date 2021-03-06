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
 * @interface UnactivatedEmailUpdateRequestDTO
 */
export interface UnactivatedEmailUpdateRequestDTO {
    /**
     * 
     * @type {string}
     * @memberof UnactivatedEmailUpdateRequestDTO
     */
    newEmail: string;
    /**
     * 
     * @type {string}
     * @memberof UnactivatedEmailUpdateRequestDTO
     */
    email: string;
}

export function UnactivatedEmailUpdateRequestDTOFromJSON(json: any): UnactivatedEmailUpdateRequestDTO {
    return UnactivatedEmailUpdateRequestDTOFromJSONTyped(json, false);
}

export function UnactivatedEmailUpdateRequestDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnactivatedEmailUpdateRequestDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'newEmail': json['newEmail'],
        'email': json['email'],
    };
}

export function UnactivatedEmailUpdateRequestDTOToJSON(value?: UnactivatedEmailUpdateRequestDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'newEmail': value.newEmail,
        'email': value.email,
    };
}


