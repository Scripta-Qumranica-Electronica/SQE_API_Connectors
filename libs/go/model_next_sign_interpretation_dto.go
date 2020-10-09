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

// NextSignInterpretationDTO struct for NextSignInterpretationDTO
type NextSignInterpretationDTO struct {
	NextSignInterpretationId int32 `json:"nextSignInterpretationId"`
	CreatorId int32 `json:"creatorId"`
	EditorId int32 `json:"editorId"`
}

// NewNextSignInterpretationDTO instantiates a new NextSignInterpretationDTO object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewNextSignInterpretationDTO(nextSignInterpretationId int32, creatorId int32, editorId int32, ) *NextSignInterpretationDTO {
	this := NextSignInterpretationDTO{}
	this.NextSignInterpretationId = nextSignInterpretationId
	this.CreatorId = creatorId
	this.EditorId = editorId
	return &this
}

// NewNextSignInterpretationDTOWithDefaults instantiates a new NextSignInterpretationDTO object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewNextSignInterpretationDTOWithDefaults() *NextSignInterpretationDTO {
	this := NextSignInterpretationDTO{}
	return &this
}

// GetNextSignInterpretationId returns the NextSignInterpretationId field value
func (o *NextSignInterpretationDTO) GetNextSignInterpretationId() int32 {
	if o == nil  {
		var ret int32
		return ret
	}

	return o.NextSignInterpretationId
}

// GetNextSignInterpretationIdOk returns a tuple with the NextSignInterpretationId field value
// and a boolean to check if the value has been set.
func (o *NextSignInterpretationDTO) GetNextSignInterpretationIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.NextSignInterpretationId, true
}

// SetNextSignInterpretationId sets field value
func (o *NextSignInterpretationDTO) SetNextSignInterpretationId(v int32) {
	o.NextSignInterpretationId = v
}

// GetCreatorId returns the CreatorId field value
func (o *NextSignInterpretationDTO) GetCreatorId() int32 {
	if o == nil  {
		var ret int32
		return ret
	}

	return o.CreatorId
}

// GetCreatorIdOk returns a tuple with the CreatorId field value
// and a boolean to check if the value has been set.
func (o *NextSignInterpretationDTO) GetCreatorIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.CreatorId, true
}

// SetCreatorId sets field value
func (o *NextSignInterpretationDTO) SetCreatorId(v int32) {
	o.CreatorId = v
}

// GetEditorId returns the EditorId field value
func (o *NextSignInterpretationDTO) GetEditorId() int32 {
	if o == nil  {
		var ret int32
		return ret
	}

	return o.EditorId
}

// GetEditorIdOk returns a tuple with the EditorId field value
// and a boolean to check if the value has been set.
func (o *NextSignInterpretationDTO) GetEditorIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.EditorId, true
}

// SetEditorId sets field value
func (o *NextSignInterpretationDTO) SetEditorId(v int32) {
	o.EditorId = v
}

func (o NextSignInterpretationDTO) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["nextSignInterpretationId"] = o.NextSignInterpretationId
	}
	if true {
		toSerialize["creatorId"] = o.CreatorId
	}
	if true {
		toSerialize["editorId"] = o.EditorId
	}
	return json.Marshal(toSerialize)
}

type NullableNextSignInterpretationDTO struct {
	value *NextSignInterpretationDTO
	isSet bool
}

func (v NullableNextSignInterpretationDTO) Get() *NextSignInterpretationDTO {
	return v.value
}

func (v *NullableNextSignInterpretationDTO) Set(val *NextSignInterpretationDTO) {
	v.value = val
	v.isSet = true
}

func (v NullableNextSignInterpretationDTO) IsSet() bool {
	return v.isSet
}

func (v *NullableNextSignInterpretationDTO) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableNextSignInterpretationDTO(val *NextSignInterpretationDTO) *NullableNextSignInterpretationDTO {
	return &NullableNextSignInterpretationDTO{value: val, isSet: true}
}

func (v NullableNextSignInterpretationDTO) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableNextSignInterpretationDTO) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


