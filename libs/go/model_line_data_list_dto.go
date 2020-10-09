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

// LineDataListDTO struct for LineDataListDTO
type LineDataListDTO struct {
	Lines []LineDataDTO `json:"lines"`
}

// NewLineDataListDTO instantiates a new LineDataListDTO object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewLineDataListDTO(lines []LineDataDTO, ) *LineDataListDTO {
	this := LineDataListDTO{}
	this.Lines = lines
	return &this
}

// NewLineDataListDTOWithDefaults instantiates a new LineDataListDTO object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewLineDataListDTOWithDefaults() *LineDataListDTO {
	this := LineDataListDTO{}
	return &this
}

// GetLines returns the Lines field value
func (o *LineDataListDTO) GetLines() []LineDataDTO {
	if o == nil  {
		var ret []LineDataDTO
		return ret
	}

	return o.Lines
}

// GetLinesOk returns a tuple with the Lines field value
// and a boolean to check if the value has been set.
func (o *LineDataListDTO) GetLinesOk() (*[]LineDataDTO, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Lines, true
}

// SetLines sets field value
func (o *LineDataListDTO) SetLines(v []LineDataDTO) {
	o.Lines = v
}

func (o LineDataListDTO) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["lines"] = o.Lines
	}
	return json.Marshal(toSerialize)
}

type NullableLineDataListDTO struct {
	value *LineDataListDTO
	isSet bool
}

func (v NullableLineDataListDTO) Get() *LineDataListDTO {
	return v.value
}

func (v *NullableLineDataListDTO) Set(val *LineDataListDTO) {
	v.value = val
	v.isSet = true
}

func (v NullableLineDataListDTO) IsSet() bool {
	return v.isSet
}

func (v *NullableLineDataListDTO) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableLineDataListDTO(val *LineDataListDTO) *NullableLineDataListDTO {
	return &NullableLineDataListDTO{value: val, isSet: true}
}

func (v NullableLineDataListDTO) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableLineDataListDTO) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


