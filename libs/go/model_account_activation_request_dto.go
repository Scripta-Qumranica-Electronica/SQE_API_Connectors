/*
 * SQE API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: v1
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// AccountActivationRequestDTO struct for AccountActivationRequestDTO
type AccountActivationRequestDTO struct {
	Token string `json:"token"`
}

// NewAccountActivationRequestDTO instantiates a new AccountActivationRequestDTO object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAccountActivationRequestDTO(token string, ) *AccountActivationRequestDTO {
	this := AccountActivationRequestDTO{}
	this.Token = token
	return &this
}

// NewAccountActivationRequestDTOWithDefaults instantiates a new AccountActivationRequestDTO object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAccountActivationRequestDTOWithDefaults() *AccountActivationRequestDTO {
	this := AccountActivationRequestDTO{}
	return &this
}

// GetToken returns the Token field value
func (o *AccountActivationRequestDTO) GetToken() string {
	if o == nil  {
		var ret string
		return ret
	}

	return o.Token
}

// GetTokenOk returns a tuple with the Token field value
// and a boolean to check if the value has been set.
func (o *AccountActivationRequestDTO) GetTokenOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Token, true
}

// SetToken sets field value
func (o *AccountActivationRequestDTO) SetToken(v string) {
	o.Token = v
}

func (o AccountActivationRequestDTO) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["token"] = o.Token
	}
	return json.Marshal(toSerialize)
}

type NullableAccountActivationRequestDTO struct {
	value *AccountActivationRequestDTO
	isSet bool
}

func (v NullableAccountActivationRequestDTO) Get() *AccountActivationRequestDTO {
	return v.value
}

func (v *NullableAccountActivationRequestDTO) Set(val *AccountActivationRequestDTO) {
	v.value = val
	v.isSet = true
}

func (v NullableAccountActivationRequestDTO) IsSet() bool {
	return v.isSet
}

func (v *NullableAccountActivationRequestDTO) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAccountActivationRequestDTO(val *AccountActivationRequestDTO) *NullableAccountActivationRequestDTO {
	return &NullableAccountActivationRequestDTO{value: val, isSet: true}
}

func (v NullableAccountActivationRequestDTO) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAccountActivationRequestDTO) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

