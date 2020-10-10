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


import * as runtime from '../runtime';
import {
    ImageInstitutionListDTO,
    ImageInstitutionListDTOFromJSON,
    ImageInstitutionListDTOToJSON,
    ImagedObjectDTO,
    ImagedObjectDTOFromJSON,
    ImagedObjectDTOToJSON,
    ImagedObjectListDTO,
    ImagedObjectListDTOFromJSON,
    ImagedObjectListDTOToJSON,
    ImagedObjectTextFragmentMatchListDTO,
    ImagedObjectTextFragmentMatchListDTOFromJSON,
    ImagedObjectTextFragmentMatchListDTOToJSON,
    InstitutionalImageListDTO,
    InstitutionalImageListDTOFromJSON,
    InstitutionalImageListDTOToJSON,
    SimpleImageListDTO,
    SimpleImageListDTOFromJSON,
    SimpleImageListDTOToJSON,
} from '../models';

export interface V1EditionsEditionIdImagedObjectsGetRequest {
    editionId: number;
    optional?: Array<string>;
}

export interface V1EditionsEditionIdImagedObjectsImagedObjectIdGetRequest {
    editionId: number;
    imagedObjectId: string;
    optional?: Array<string>;
}

export interface V1ImagedObjectsImagedObjectIdGetRequest {
    imagedObjectId: string;
}

export interface V1ImagedObjectsImagedObjectIdTextFragmentsGetRequest {
    imagedObjectId: string;
}

export interface V1ImagedObjectsInstitutionsInstitutionNameGetRequest {
    institutionName: string;
}

/**
 * 
 */
export class ImagedObjectApi extends runtime.BaseAPI {

    /**
     * Provides a listing of imaged objects related to the specified edition, can include images and also their masks with  optional.
     */
    async v1EditionsEditionIdImagedObjectsGetRaw(requestParameters: V1EditionsEditionIdImagedObjectsGetRequest): Promise<runtime.ApiResponse<ImagedObjectListDTO>> {
        if (requestParameters.editionId === null || requestParameters.editionId === undefined) {
            throw new runtime.RequiredError('editionId','Required parameter requestParameters.editionId was null or undefined when calling v1EditionsEditionIdImagedObjectsGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.optional) {
            queryParameters['optional'] = requestParameters.optional;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/v1/editions/{editionId}/imaged-objects`.replace(`{${"editionId"}}`, encodeURIComponent(String(requestParameters.editionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagedObjectListDTOFromJSON(jsonValue));
    }

    /**
     * Provides a listing of imaged objects related to the specified edition, can include images and also their masks with  optional.
     */
    async v1EditionsEditionIdImagedObjectsGet(requestParameters: V1EditionsEditionIdImagedObjectsGetRequest): Promise<ImagedObjectListDTO> {
        const response = await this.v1EditionsEditionIdImagedObjectsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Provides information for the specified imaged object related to the specified edition, can include images and also  their masks with optional.
     */
    async v1EditionsEditionIdImagedObjectsImagedObjectIdGetRaw(requestParameters: V1EditionsEditionIdImagedObjectsImagedObjectIdGetRequest): Promise<runtime.ApiResponse<ImagedObjectDTO>> {
        if (requestParameters.editionId === null || requestParameters.editionId === undefined) {
            throw new runtime.RequiredError('editionId','Required parameter requestParameters.editionId was null or undefined when calling v1EditionsEditionIdImagedObjectsImagedObjectIdGet.');
        }

        if (requestParameters.imagedObjectId === null || requestParameters.imagedObjectId === undefined) {
            throw new runtime.RequiredError('imagedObjectId','Required parameter requestParameters.imagedObjectId was null or undefined when calling v1EditionsEditionIdImagedObjectsImagedObjectIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.optional) {
            queryParameters['optional'] = requestParameters.optional;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/v1/editions/{editionId}/imaged-objects/{imagedObjectId}`.replace(`{${"editionId"}}`, encodeURIComponent(String(requestParameters.editionId))).replace(`{${"imagedObjectId"}}`, encodeURIComponent(String(requestParameters.imagedObjectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagedObjectDTOFromJSON(jsonValue));
    }

    /**
     * Provides information for the specified imaged object related to the specified edition, can include images and also  their masks with optional.
     */
    async v1EditionsEditionIdImagedObjectsImagedObjectIdGet(requestParameters: V1EditionsEditionIdImagedObjectsImagedObjectIdGetRequest): Promise<ImagedObjectDTO> {
        const response = await this.v1EditionsEditionIdImagedObjectsImagedObjectIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Provides information for the specified imaged object.
     */
    async v1ImagedObjectsImagedObjectIdGetRaw(requestParameters: V1ImagedObjectsImagedObjectIdGetRequest): Promise<runtime.ApiResponse<SimpleImageListDTO>> {
        if (requestParameters.imagedObjectId === null || requestParameters.imagedObjectId === undefined) {
            throw new runtime.RequiredError('imagedObjectId','Required parameter requestParameters.imagedObjectId was null or undefined when calling v1ImagedObjectsImagedObjectIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/v1/imaged-objects/{imagedObjectId}`.replace(`{${"imagedObjectId"}}`, encodeURIComponent(String(requestParameters.imagedObjectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SimpleImageListDTOFromJSON(jsonValue));
    }

    /**
     * Provides information for the specified imaged object.
     */
    async v1ImagedObjectsImagedObjectIdGet(requestParameters: V1ImagedObjectsImagedObjectIdGetRequest): Promise<SimpleImageListDTO> {
        const response = await this.v1ImagedObjectsImagedObjectIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Provides a list of all text fragments that should correspond to the imaged object.
     */
    async v1ImagedObjectsImagedObjectIdTextFragmentsGetRaw(requestParameters: V1ImagedObjectsImagedObjectIdTextFragmentsGetRequest): Promise<runtime.ApiResponse<ImagedObjectTextFragmentMatchListDTO>> {
        if (requestParameters.imagedObjectId === null || requestParameters.imagedObjectId === undefined) {
            throw new runtime.RequiredError('imagedObjectId','Required parameter requestParameters.imagedObjectId was null or undefined when calling v1ImagedObjectsImagedObjectIdTextFragmentsGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/v1/imaged-objects/{imagedObjectId}/text-fragments`.replace(`{${"imagedObjectId"}}`, encodeURIComponent(String(requestParameters.imagedObjectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ImagedObjectTextFragmentMatchListDTOFromJSON(jsonValue));
    }

    /**
     * Provides a list of all text fragments that should correspond to the imaged object.
     */
    async v1ImagedObjectsImagedObjectIdTextFragmentsGet(requestParameters: V1ImagedObjectsImagedObjectIdTextFragmentsGetRequest): Promise<ImagedObjectTextFragmentMatchListDTO> {
        const response = await this.v1ImagedObjectsImagedObjectIdTextFragmentsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Provides a list of all institutional image providers.
     */
    async v1ImagedObjectsInstitutionsGetRaw(): Promise<runtime.ApiResponse<ImageInstitutionListDTO>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/v1/imaged-objects/institutions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ImageInstitutionListDTOFromJSON(jsonValue));
    }

    /**
     * Provides a list of all institutional image providers.
     */
    async v1ImagedObjectsInstitutionsGet(): Promise<ImageInstitutionListDTO> {
        const response = await this.v1ImagedObjectsInstitutionsGetRaw();
        return await response.value();
    }

    /**
     * Provides a list of all institutional image providers.
     */
    async v1ImagedObjectsInstitutionsInstitutionNameGetRaw(requestParameters: V1ImagedObjectsInstitutionsInstitutionNameGetRequest): Promise<runtime.ApiResponse<InstitutionalImageListDTO>> {
        if (requestParameters.institutionName === null || requestParameters.institutionName === undefined) {
            throw new runtime.RequiredError('institutionName','Required parameter requestParameters.institutionName was null or undefined when calling v1ImagedObjectsInstitutionsInstitutionNameGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/v1/imaged-objects/institutions/{institutionName}`.replace(`{${"institutionName"}}`, encodeURIComponent(String(requestParameters.institutionName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InstitutionalImageListDTOFromJSON(jsonValue));
    }

    /**
     * Provides a list of all institutional image providers.
     */
    async v1ImagedObjectsInstitutionsInstitutionNameGet(requestParameters: V1ImagedObjectsInstitutionsInstitutionNameGetRequest): Promise<InstitutionalImageListDTO> {
        const response = await this.v1ImagedObjectsInstitutionsInstitutionNameGetRaw(requestParameters);
        return await response.value();
    }

}
