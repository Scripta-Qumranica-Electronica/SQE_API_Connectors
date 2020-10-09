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

// ImageStackDTO struct for ImageStackDTO
type ImageStackDTO struct {
	Id NullableInt32 `json:"id,omitempty"`
	Images []ImageDTO `json:"images"`
	MasterIndex NullableInt32 `json:"masterIndex,omitempty"`
}

// NewImageStackDTO instantiates a new ImageStackDTO object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewImageStackDTO(images []ImageDTO, ) *ImageStackDTO {
	this := ImageStackDTO{}
	this.Images = images
	return &this
}

// NewImageStackDTOWithDefaults instantiates a new ImageStackDTO object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewImageStackDTOWithDefaults() *ImageStackDTO {
	this := ImageStackDTO{}
	return &this
}

// GetId returns the Id field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *ImageStackDTO) GetId() int32 {
	if o == nil || o.Id.Get() == nil {
		var ret int32
		return ret
	}
	return *o.Id.Get()
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *ImageStackDTO) GetIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Id.Get(), o.Id.IsSet()
}

// HasId returns a boolean if a field has been set.
func (o *ImageStackDTO) HasId() bool {
	if o != nil && o.Id.IsSet() {
		return true
	}

	return false
}

// SetId gets a reference to the given NullableInt32 and assigns it to the Id field.
func (o *ImageStackDTO) SetId(v int32) {
	o.Id.Set(&v)
}
// SetIdNil sets the value for Id to be an explicit nil
func (o *ImageStackDTO) SetIdNil() {
	o.Id.Set(nil)
}

// UnsetId ensures that no value is present for Id, not even an explicit nil
func (o *ImageStackDTO) UnsetId() {
	o.Id.Unset()
}

// GetImages returns the Images field value
func (o *ImageStackDTO) GetImages() []ImageDTO {
	if o == nil  {
		var ret []ImageDTO
		return ret
	}

	return o.Images
}

// GetImagesOk returns a tuple with the Images field value
// and a boolean to check if the value has been set.
func (o *ImageStackDTO) GetImagesOk() (*[]ImageDTO, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Images, true
}

// SetImages sets field value
func (o *ImageStackDTO) SetImages(v []ImageDTO) {
	o.Images = v
}

// GetMasterIndex returns the MasterIndex field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *ImageStackDTO) GetMasterIndex() int32 {
	if o == nil || o.MasterIndex.Get() == nil {
		var ret int32
		return ret
	}
	return *o.MasterIndex.Get()
}

// GetMasterIndexOk returns a tuple with the MasterIndex field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *ImageStackDTO) GetMasterIndexOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return o.MasterIndex.Get(), o.MasterIndex.IsSet()
}

// HasMasterIndex returns a boolean if a field has been set.
func (o *ImageStackDTO) HasMasterIndex() bool {
	if o != nil && o.MasterIndex.IsSet() {
		return true
	}

	return false
}

// SetMasterIndex gets a reference to the given NullableInt32 and assigns it to the MasterIndex field.
func (o *ImageStackDTO) SetMasterIndex(v int32) {
	o.MasterIndex.Set(&v)
}
// SetMasterIndexNil sets the value for MasterIndex to be an explicit nil
func (o *ImageStackDTO) SetMasterIndexNil() {
	o.MasterIndex.Set(nil)
}

// UnsetMasterIndex ensures that no value is present for MasterIndex, not even an explicit nil
func (o *ImageStackDTO) UnsetMasterIndex() {
	o.MasterIndex.Unset()
}

func (o ImageStackDTO) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Id.IsSet() {
		toSerialize["id"] = o.Id.Get()
	}
	if true {
		toSerialize["images"] = o.Images
	}
	if o.MasterIndex.IsSet() {
		toSerialize["masterIndex"] = o.MasterIndex.Get()
	}
	return json.Marshal(toSerialize)
}

type NullableImageStackDTO struct {
	value *ImageStackDTO
	isSet bool
}

func (v NullableImageStackDTO) Get() *ImageStackDTO {
	return v.value
}

func (v *NullableImageStackDTO) Set(val *ImageStackDTO) {
	v.value = val
	v.isSet = true
}

func (v NullableImageStackDTO) IsSet() bool {
	return v.isSet
}

func (v *NullableImageStackDTO) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableImageStackDTO(val *ImageStackDTO) *NullableImageStackDTO {
	return &NullableImageStackDTO{value: val, isSet: true}
}

func (v NullableImageStackDTO) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableImageStackDTO) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

