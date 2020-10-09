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

// CreateTextFragmentDTO struct for CreateTextFragmentDTO
type CreateTextFragmentDTO struct {
	Name string `json:"name"`
	PreviousTextFragmentId NullableInt32 `json:"previousTextFragmentId,omitempty"`
	NextTextFragmentId NullableInt32 `json:"nextTextFragmentId,omitempty"`
}

// NewCreateTextFragmentDTO instantiates a new CreateTextFragmentDTO object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCreateTextFragmentDTO(name string, ) *CreateTextFragmentDTO {
	this := CreateTextFragmentDTO{}
	this.Name = name
	return &this
}

// NewCreateTextFragmentDTOWithDefaults instantiates a new CreateTextFragmentDTO object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCreateTextFragmentDTOWithDefaults() *CreateTextFragmentDTO {
	this := CreateTextFragmentDTO{}
	return &this
}

// GetName returns the Name field value
func (o *CreateTextFragmentDTO) GetName() string {
	if o == nil  {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *CreateTextFragmentDTO) GetNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *CreateTextFragmentDTO) SetName(v string) {
	o.Name = v
}

// GetPreviousTextFragmentId returns the PreviousTextFragmentId field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *CreateTextFragmentDTO) GetPreviousTextFragmentId() int32 {
	if o == nil || o.PreviousTextFragmentId.Get() == nil {
		var ret int32
		return ret
	}
	return *o.PreviousTextFragmentId.Get()
}

// GetPreviousTextFragmentIdOk returns a tuple with the PreviousTextFragmentId field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *CreateTextFragmentDTO) GetPreviousTextFragmentIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return o.PreviousTextFragmentId.Get(), o.PreviousTextFragmentId.IsSet()
}

// HasPreviousTextFragmentId returns a boolean if a field has been set.
func (o *CreateTextFragmentDTO) HasPreviousTextFragmentId() bool {
	if o != nil && o.PreviousTextFragmentId.IsSet() {
		return true
	}

	return false
}

// SetPreviousTextFragmentId gets a reference to the given NullableInt32 and assigns it to the PreviousTextFragmentId field.
func (o *CreateTextFragmentDTO) SetPreviousTextFragmentId(v int32) {
	o.PreviousTextFragmentId.Set(&v)
}
// SetPreviousTextFragmentIdNil sets the value for PreviousTextFragmentId to be an explicit nil
func (o *CreateTextFragmentDTO) SetPreviousTextFragmentIdNil() {
	o.PreviousTextFragmentId.Set(nil)
}

// UnsetPreviousTextFragmentId ensures that no value is present for PreviousTextFragmentId, not even an explicit nil
func (o *CreateTextFragmentDTO) UnsetPreviousTextFragmentId() {
	o.PreviousTextFragmentId.Unset()
}

// GetNextTextFragmentId returns the NextTextFragmentId field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *CreateTextFragmentDTO) GetNextTextFragmentId() int32 {
	if o == nil || o.NextTextFragmentId.Get() == nil {
		var ret int32
		return ret
	}
	return *o.NextTextFragmentId.Get()
}

// GetNextTextFragmentIdOk returns a tuple with the NextTextFragmentId field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *CreateTextFragmentDTO) GetNextTextFragmentIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return o.NextTextFragmentId.Get(), o.NextTextFragmentId.IsSet()
}

// HasNextTextFragmentId returns a boolean if a field has been set.
func (o *CreateTextFragmentDTO) HasNextTextFragmentId() bool {
	if o != nil && o.NextTextFragmentId.IsSet() {
		return true
	}

	return false
}

// SetNextTextFragmentId gets a reference to the given NullableInt32 and assigns it to the NextTextFragmentId field.
func (o *CreateTextFragmentDTO) SetNextTextFragmentId(v int32) {
	o.NextTextFragmentId.Set(&v)
}
// SetNextTextFragmentIdNil sets the value for NextTextFragmentId to be an explicit nil
func (o *CreateTextFragmentDTO) SetNextTextFragmentIdNil() {
	o.NextTextFragmentId.Set(nil)
}

// UnsetNextTextFragmentId ensures that no value is present for NextTextFragmentId, not even an explicit nil
func (o *CreateTextFragmentDTO) UnsetNextTextFragmentId() {
	o.NextTextFragmentId.Unset()
}

func (o CreateTextFragmentDTO) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["name"] = o.Name
	}
	if o.PreviousTextFragmentId.IsSet() {
		toSerialize["previousTextFragmentId"] = o.PreviousTextFragmentId.Get()
	}
	if o.NextTextFragmentId.IsSet() {
		toSerialize["nextTextFragmentId"] = o.NextTextFragmentId.Get()
	}
	return json.Marshal(toSerialize)
}

type NullableCreateTextFragmentDTO struct {
	value *CreateTextFragmentDTO
	isSet bool
}

func (v NullableCreateTextFragmentDTO) Get() *CreateTextFragmentDTO {
	return v.value
}

func (v *NullableCreateTextFragmentDTO) Set(val *CreateTextFragmentDTO) {
	v.value = val
	v.isSet = true
}

func (v NullableCreateTextFragmentDTO) IsSet() bool {
	return v.isSet
}

func (v *NullableCreateTextFragmentDTO) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCreateTextFragmentDTO(val *CreateTextFragmentDTO) *NullableCreateTextFragmentDTO {
	return &NullableCreateTextFragmentDTO{value: val, isSet: true}
}

func (v NullableCreateTextFragmentDTO) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCreateTextFragmentDTO) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


