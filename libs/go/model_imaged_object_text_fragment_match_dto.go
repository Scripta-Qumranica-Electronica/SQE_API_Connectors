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

// ImagedObjectTextFragmentMatchDTO struct for ImagedObjectTextFragmentMatchDTO
type ImagedObjectTextFragmentMatchDTO struct {
	EditionId int32 `json:"editionId"`
	ManuscriptName string `json:"manuscriptName"`
	TextFragmentId int32 `json:"textFragmentId"`
	TextFragmentName string `json:"textFragmentName"`
	Side SideDesignation `json:"side"`
}

// NewImagedObjectTextFragmentMatchDTO instantiates a new ImagedObjectTextFragmentMatchDTO object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewImagedObjectTextFragmentMatchDTO(editionId int32, manuscriptName string, textFragmentId int32, textFragmentName string, side SideDesignation, ) *ImagedObjectTextFragmentMatchDTO {
	this := ImagedObjectTextFragmentMatchDTO{}
	this.EditionId = editionId
	this.ManuscriptName = manuscriptName
	this.TextFragmentId = textFragmentId
	this.TextFragmentName = textFragmentName
	this.Side = side
	return &this
}

// NewImagedObjectTextFragmentMatchDTOWithDefaults instantiates a new ImagedObjectTextFragmentMatchDTO object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewImagedObjectTextFragmentMatchDTOWithDefaults() *ImagedObjectTextFragmentMatchDTO {
	this := ImagedObjectTextFragmentMatchDTO{}
	return &this
}

// GetEditionId returns the EditionId field value
func (o *ImagedObjectTextFragmentMatchDTO) GetEditionId() int32 {
	if o == nil  {
		var ret int32
		return ret
	}

	return o.EditionId
}

// GetEditionIdOk returns a tuple with the EditionId field value
// and a boolean to check if the value has been set.
func (o *ImagedObjectTextFragmentMatchDTO) GetEditionIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.EditionId, true
}

// SetEditionId sets field value
func (o *ImagedObjectTextFragmentMatchDTO) SetEditionId(v int32) {
	o.EditionId = v
}

// GetManuscriptName returns the ManuscriptName field value
func (o *ImagedObjectTextFragmentMatchDTO) GetManuscriptName() string {
	if o == nil  {
		var ret string
		return ret
	}

	return o.ManuscriptName
}

// GetManuscriptNameOk returns a tuple with the ManuscriptName field value
// and a boolean to check if the value has been set.
func (o *ImagedObjectTextFragmentMatchDTO) GetManuscriptNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.ManuscriptName, true
}

// SetManuscriptName sets field value
func (o *ImagedObjectTextFragmentMatchDTO) SetManuscriptName(v string) {
	o.ManuscriptName = v
}

// GetTextFragmentId returns the TextFragmentId field value
func (o *ImagedObjectTextFragmentMatchDTO) GetTextFragmentId() int32 {
	if o == nil  {
		var ret int32
		return ret
	}

	return o.TextFragmentId
}

// GetTextFragmentIdOk returns a tuple with the TextFragmentId field value
// and a boolean to check if the value has been set.
func (o *ImagedObjectTextFragmentMatchDTO) GetTextFragmentIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.TextFragmentId, true
}

// SetTextFragmentId sets field value
func (o *ImagedObjectTextFragmentMatchDTO) SetTextFragmentId(v int32) {
	o.TextFragmentId = v
}

// GetTextFragmentName returns the TextFragmentName field value
func (o *ImagedObjectTextFragmentMatchDTO) GetTextFragmentName() string {
	if o == nil  {
		var ret string
		return ret
	}

	return o.TextFragmentName
}

// GetTextFragmentNameOk returns a tuple with the TextFragmentName field value
// and a boolean to check if the value has been set.
func (o *ImagedObjectTextFragmentMatchDTO) GetTextFragmentNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.TextFragmentName, true
}

// SetTextFragmentName sets field value
func (o *ImagedObjectTextFragmentMatchDTO) SetTextFragmentName(v string) {
	o.TextFragmentName = v
}

// GetSide returns the Side field value
func (o *ImagedObjectTextFragmentMatchDTO) GetSide() SideDesignation {
	if o == nil  {
		var ret SideDesignation
		return ret
	}

	return o.Side
}

// GetSideOk returns a tuple with the Side field value
// and a boolean to check if the value has been set.
func (o *ImagedObjectTextFragmentMatchDTO) GetSideOk() (*SideDesignation, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Side, true
}

// SetSide sets field value
func (o *ImagedObjectTextFragmentMatchDTO) SetSide(v SideDesignation) {
	o.Side = v
}

func (o ImagedObjectTextFragmentMatchDTO) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["editionId"] = o.EditionId
	}
	if true {
		toSerialize["manuscriptName"] = o.ManuscriptName
	}
	if true {
		toSerialize["textFragmentId"] = o.TextFragmentId
	}
	if true {
		toSerialize["textFragmentName"] = o.TextFragmentName
	}
	if true {
		toSerialize["side"] = o.Side
	}
	return json.Marshal(toSerialize)
}

type NullableImagedObjectTextFragmentMatchDTO struct {
	value *ImagedObjectTextFragmentMatchDTO
	isSet bool
}

func (v NullableImagedObjectTextFragmentMatchDTO) Get() *ImagedObjectTextFragmentMatchDTO {
	return v.value
}

func (v *NullableImagedObjectTextFragmentMatchDTO) Set(val *ImagedObjectTextFragmentMatchDTO) {
	v.value = val
	v.isSet = true
}

func (v NullableImagedObjectTextFragmentMatchDTO) IsSet() bool {
	return v.isSet
}

func (v *NullableImagedObjectTextFragmentMatchDTO) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableImagedObjectTextFragmentMatchDTO(val *ImagedObjectTextFragmentMatchDTO) *NullableImagedObjectTextFragmentMatchDTO {
	return &NullableImagedObjectTextFragmentMatchDTO{value: val, isSet: true}
}

func (v NullableImagedObjectTextFragmentMatchDTO) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableImagedObjectTextFragmentMatchDTO) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


