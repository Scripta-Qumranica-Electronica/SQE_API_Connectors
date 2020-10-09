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

// UpdateEditionManuscriptMetricsDTO struct for UpdateEditionManuscriptMetricsDTO
type UpdateEditionManuscriptMetricsDTO struct {
	Width int32 `json:"width"`
	Height int32 `json:"height"`
	XOrigin int32 `json:"xOrigin"`
	YOrigin int32 `json:"yOrigin"`
}

// NewUpdateEditionManuscriptMetricsDTO instantiates a new UpdateEditionManuscriptMetricsDTO object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUpdateEditionManuscriptMetricsDTO(width int32, height int32, xOrigin int32, yOrigin int32, ) *UpdateEditionManuscriptMetricsDTO {
	this := UpdateEditionManuscriptMetricsDTO{}
	this.Width = width
	this.Height = height
	this.XOrigin = xOrigin
	this.YOrigin = yOrigin
	return &this
}

// NewUpdateEditionManuscriptMetricsDTOWithDefaults instantiates a new UpdateEditionManuscriptMetricsDTO object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUpdateEditionManuscriptMetricsDTOWithDefaults() *UpdateEditionManuscriptMetricsDTO {
	this := UpdateEditionManuscriptMetricsDTO{}
	return &this
}

// GetWidth returns the Width field value
func (o *UpdateEditionManuscriptMetricsDTO) GetWidth() int32 {
	if o == nil  {
		var ret int32
		return ret
	}

	return o.Width
}

// GetWidthOk returns a tuple with the Width field value
// and a boolean to check if the value has been set.
func (o *UpdateEditionManuscriptMetricsDTO) GetWidthOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Width, true
}

// SetWidth sets field value
func (o *UpdateEditionManuscriptMetricsDTO) SetWidth(v int32) {
	o.Width = v
}

// GetHeight returns the Height field value
func (o *UpdateEditionManuscriptMetricsDTO) GetHeight() int32 {
	if o == nil  {
		var ret int32
		return ret
	}

	return o.Height
}

// GetHeightOk returns a tuple with the Height field value
// and a boolean to check if the value has been set.
func (o *UpdateEditionManuscriptMetricsDTO) GetHeightOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Height, true
}

// SetHeight sets field value
func (o *UpdateEditionManuscriptMetricsDTO) SetHeight(v int32) {
	o.Height = v
}

// GetXOrigin returns the XOrigin field value
func (o *UpdateEditionManuscriptMetricsDTO) GetXOrigin() int32 {
	if o == nil  {
		var ret int32
		return ret
	}

	return o.XOrigin
}

// GetXOriginOk returns a tuple with the XOrigin field value
// and a boolean to check if the value has been set.
func (o *UpdateEditionManuscriptMetricsDTO) GetXOriginOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.XOrigin, true
}

// SetXOrigin sets field value
func (o *UpdateEditionManuscriptMetricsDTO) SetXOrigin(v int32) {
	o.XOrigin = v
}

// GetYOrigin returns the YOrigin field value
func (o *UpdateEditionManuscriptMetricsDTO) GetYOrigin() int32 {
	if o == nil  {
		var ret int32
		return ret
	}

	return o.YOrigin
}

// GetYOriginOk returns a tuple with the YOrigin field value
// and a boolean to check if the value has been set.
func (o *UpdateEditionManuscriptMetricsDTO) GetYOriginOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.YOrigin, true
}

// SetYOrigin sets field value
func (o *UpdateEditionManuscriptMetricsDTO) SetYOrigin(v int32) {
	o.YOrigin = v
}

func (o UpdateEditionManuscriptMetricsDTO) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["width"] = o.Width
	}
	if true {
		toSerialize["height"] = o.Height
	}
	if true {
		toSerialize["xOrigin"] = o.XOrigin
	}
	if true {
		toSerialize["yOrigin"] = o.YOrigin
	}
	return json.Marshal(toSerialize)
}

type NullableUpdateEditionManuscriptMetricsDTO struct {
	value *UpdateEditionManuscriptMetricsDTO
	isSet bool
}

func (v NullableUpdateEditionManuscriptMetricsDTO) Get() *UpdateEditionManuscriptMetricsDTO {
	return v.value
}

func (v *NullableUpdateEditionManuscriptMetricsDTO) Set(val *UpdateEditionManuscriptMetricsDTO) {
	v.value = val
	v.isSet = true
}

func (v NullableUpdateEditionManuscriptMetricsDTO) IsSet() bool {
	return v.isSet
}

func (v *NullableUpdateEditionManuscriptMetricsDTO) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUpdateEditionManuscriptMetricsDTO(val *UpdateEditionManuscriptMetricsDTO) *NullableUpdateEditionManuscriptMetricsDTO {
	return &NullableUpdateEditionManuscriptMetricsDTO{value: val, isSet: true}
}

func (v NullableUpdateEditionManuscriptMetricsDTO) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUpdateEditionManuscriptMetricsDTO) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

