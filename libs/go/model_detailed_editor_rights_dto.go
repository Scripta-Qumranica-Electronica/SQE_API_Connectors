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

// DetailedEditorRightsDTO struct for DetailedEditorRightsDTO
type DetailedEditorRightsDTO struct {
	Email string `json:"email"`
	EditionId int32 `json:"editionId"`
	MayLock bool `json:"mayLock"`
	MayRead bool `json:"mayRead"`
	MayWrite bool `json:"mayWrite"`
	IsAdmin bool `json:"isAdmin"`
}

// NewDetailedEditorRightsDTO instantiates a new DetailedEditorRightsDTO object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDetailedEditorRightsDTO(email string, editionId int32, mayLock bool, mayRead bool, mayWrite bool, isAdmin bool, ) *DetailedEditorRightsDTO {
	this := DetailedEditorRightsDTO{}
	this.Email = email
	this.EditionId = editionId
	this.MayLock = mayLock
	this.MayRead = mayRead
	this.MayWrite = mayWrite
	this.IsAdmin = isAdmin
	return &this
}

// NewDetailedEditorRightsDTOWithDefaults instantiates a new DetailedEditorRightsDTO object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDetailedEditorRightsDTOWithDefaults() *DetailedEditorRightsDTO {
	this := DetailedEditorRightsDTO{}
	return &this
}

// GetEmail returns the Email field value
func (o *DetailedEditorRightsDTO) GetEmail() string {
	if o == nil  {
		var ret string
		return ret
	}

	return o.Email
}

// GetEmailOk returns a tuple with the Email field value
// and a boolean to check if the value has been set.
func (o *DetailedEditorRightsDTO) GetEmailOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Email, true
}

// SetEmail sets field value
func (o *DetailedEditorRightsDTO) SetEmail(v string) {
	o.Email = v
}

// GetEditionId returns the EditionId field value
func (o *DetailedEditorRightsDTO) GetEditionId() int32 {
	if o == nil  {
		var ret int32
		return ret
	}

	return o.EditionId
}

// GetEditionIdOk returns a tuple with the EditionId field value
// and a boolean to check if the value has been set.
func (o *DetailedEditorRightsDTO) GetEditionIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.EditionId, true
}

// SetEditionId sets field value
func (o *DetailedEditorRightsDTO) SetEditionId(v int32) {
	o.EditionId = v
}

// GetMayLock returns the MayLock field value
func (o *DetailedEditorRightsDTO) GetMayLock() bool {
	if o == nil  {
		var ret bool
		return ret
	}

	return o.MayLock
}

// GetMayLockOk returns a tuple with the MayLock field value
// and a boolean to check if the value has been set.
func (o *DetailedEditorRightsDTO) GetMayLockOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MayLock, true
}

// SetMayLock sets field value
func (o *DetailedEditorRightsDTO) SetMayLock(v bool) {
	o.MayLock = v
}

// GetMayRead returns the MayRead field value
func (o *DetailedEditorRightsDTO) GetMayRead() bool {
	if o == nil  {
		var ret bool
		return ret
	}

	return o.MayRead
}

// GetMayReadOk returns a tuple with the MayRead field value
// and a boolean to check if the value has been set.
func (o *DetailedEditorRightsDTO) GetMayReadOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MayRead, true
}

// SetMayRead sets field value
func (o *DetailedEditorRightsDTO) SetMayRead(v bool) {
	o.MayRead = v
}

// GetMayWrite returns the MayWrite field value
func (o *DetailedEditorRightsDTO) GetMayWrite() bool {
	if o == nil  {
		var ret bool
		return ret
	}

	return o.MayWrite
}

// GetMayWriteOk returns a tuple with the MayWrite field value
// and a boolean to check if the value has been set.
func (o *DetailedEditorRightsDTO) GetMayWriteOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.MayWrite, true
}

// SetMayWrite sets field value
func (o *DetailedEditorRightsDTO) SetMayWrite(v bool) {
	o.MayWrite = v
}

// GetIsAdmin returns the IsAdmin field value
func (o *DetailedEditorRightsDTO) GetIsAdmin() bool {
	if o == nil  {
		var ret bool
		return ret
	}

	return o.IsAdmin
}

// GetIsAdminOk returns a tuple with the IsAdmin field value
// and a boolean to check if the value has been set.
func (o *DetailedEditorRightsDTO) GetIsAdminOk() (*bool, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.IsAdmin, true
}

// SetIsAdmin sets field value
func (o *DetailedEditorRightsDTO) SetIsAdmin(v bool) {
	o.IsAdmin = v
}

func (o DetailedEditorRightsDTO) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["email"] = o.Email
	}
	if true {
		toSerialize["editionId"] = o.EditionId
	}
	if true {
		toSerialize["mayLock"] = o.MayLock
	}
	if true {
		toSerialize["mayRead"] = o.MayRead
	}
	if true {
		toSerialize["mayWrite"] = o.MayWrite
	}
	if true {
		toSerialize["isAdmin"] = o.IsAdmin
	}
	return json.Marshal(toSerialize)
}

type NullableDetailedEditorRightsDTO struct {
	value *DetailedEditorRightsDTO
	isSet bool
}

func (v NullableDetailedEditorRightsDTO) Get() *DetailedEditorRightsDTO {
	return v.value
}

func (v *NullableDetailedEditorRightsDTO) Set(val *DetailedEditorRightsDTO) {
	v.value = val
	v.isSet = true
}

func (v NullableDetailedEditorRightsDTO) IsSet() bool {
	return v.isSet
}

func (v *NullableDetailedEditorRightsDTO) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDetailedEditorRightsDTO(val *DetailedEditorRightsDTO) *NullableDetailedEditorRightsDTO {
	return &NullableDetailedEditorRightsDTO{value: val, isSet: true}
}

func (v NullableDetailedEditorRightsDTO) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDetailedEditorRightsDTO) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

