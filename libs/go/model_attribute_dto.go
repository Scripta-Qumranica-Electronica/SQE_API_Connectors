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

// AttributeDTO struct for AttributeDTO
type AttributeDTO struct {
	AttributeId int32 `json:"attributeId"`
	AttributeName string `json:"attributeName"`
	Values []AttributeValueDTO `json:"values"`
	CreatorId int32 `json:"creatorId"`
	EditorId int32 `json:"editorId"`
	Description NullableString `json:"description,omitempty"`
	Editable *bool `json:"editable,omitempty"`
	Removable *bool `json:"removable,omitempty"`
	Repeatable *bool `json:"repeatable,omitempty"`
	BatchEditable *bool `json:"batchEditable,omitempty"`
}

// NewAttributeDTO instantiates a new AttributeDTO object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAttributeDTO(attributeId int32, attributeName string, values []AttributeValueDTO, creatorId int32, editorId int32, ) *AttributeDTO {
	this := AttributeDTO{}
	this.AttributeId = attributeId
	this.AttributeName = attributeName
	this.Values = values
	this.CreatorId = creatorId
	this.EditorId = editorId
	return &this
}

// NewAttributeDTOWithDefaults instantiates a new AttributeDTO object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAttributeDTOWithDefaults() *AttributeDTO {
	this := AttributeDTO{}
	return &this
}

// GetAttributeId returns the AttributeId field value
func (o *AttributeDTO) GetAttributeId() int32 {
	if o == nil  {
		var ret int32
		return ret
	}

	return o.AttributeId
}

// GetAttributeIdOk returns a tuple with the AttributeId field value
// and a boolean to check if the value has been set.
func (o *AttributeDTO) GetAttributeIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.AttributeId, true
}

// SetAttributeId sets field value
func (o *AttributeDTO) SetAttributeId(v int32) {
	o.AttributeId = v
}

// GetAttributeName returns the AttributeName field value
func (o *AttributeDTO) GetAttributeName() string {
	if o == nil  {
		var ret string
		return ret
	}

	return o.AttributeName
}

// GetAttributeNameOk returns a tuple with the AttributeName field value
// and a boolean to check if the value has been set.
func (o *AttributeDTO) GetAttributeNameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.AttributeName, true
}

// SetAttributeName sets field value
func (o *AttributeDTO) SetAttributeName(v string) {
	o.AttributeName = v
}

// GetValues returns the Values field value
func (o *AttributeDTO) GetValues() []AttributeValueDTO {
	if o == nil  {
		var ret []AttributeValueDTO
		return ret
	}

	return o.Values
}

// GetValuesOk returns a tuple with the Values field value
// and a boolean to check if the value has been set.
func (o *AttributeDTO) GetValuesOk() (*[]AttributeValueDTO, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Values, true
}

// SetValues sets field value
func (o *AttributeDTO) SetValues(v []AttributeValueDTO) {
	o.Values = v
}

// GetCreatorId returns the CreatorId field value
func (o *AttributeDTO) GetCreatorId() int32 {
	if o == nil  {
		var ret int32
		return ret
	}

	return o.CreatorId
}

// GetCreatorIdOk returns a tuple with the CreatorId field value
// and a boolean to check if the value has been set.
func (o *AttributeDTO) GetCreatorIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.CreatorId, true
}

// SetCreatorId sets field value
func (o *AttributeDTO) SetCreatorId(v int32) {
	o.CreatorId = v
}

// GetEditorId returns the EditorId field value
func (o *AttributeDTO) GetEditorId() int32 {
	if o == nil  {
		var ret int32
		return ret
	}

	return o.EditorId
}

// GetEditorIdOk returns a tuple with the EditorId field value
// and a boolean to check if the value has been set.
func (o *AttributeDTO) GetEditorIdOk() (*int32, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.EditorId, true
}

// SetEditorId sets field value
func (o *AttributeDTO) SetEditorId(v int32) {
	o.EditorId = v
}

// GetDescription returns the Description field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *AttributeDTO) GetDescription() string {
	if o == nil || o.Description.Get() == nil {
		var ret string
		return ret
	}
	return *o.Description.Get()
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *AttributeDTO) GetDescriptionOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Description.Get(), o.Description.IsSet()
}

// HasDescription returns a boolean if a field has been set.
func (o *AttributeDTO) HasDescription() bool {
	if o != nil && o.Description.IsSet() {
		return true
	}

	return false
}

// SetDescription gets a reference to the given NullableString and assigns it to the Description field.
func (o *AttributeDTO) SetDescription(v string) {
	o.Description.Set(&v)
}
// SetDescriptionNil sets the value for Description to be an explicit nil
func (o *AttributeDTO) SetDescriptionNil() {
	o.Description.Set(nil)
}

// UnsetDescription ensures that no value is present for Description, not even an explicit nil
func (o *AttributeDTO) UnsetDescription() {
	o.Description.Unset()
}

// GetEditable returns the Editable field value if set, zero value otherwise.
func (o *AttributeDTO) GetEditable() bool {
	if o == nil || o.Editable == nil {
		var ret bool
		return ret
	}
	return *o.Editable
}

// GetEditableOk returns a tuple with the Editable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AttributeDTO) GetEditableOk() (*bool, bool) {
	if o == nil || o.Editable == nil {
		return nil, false
	}
	return o.Editable, true
}

// HasEditable returns a boolean if a field has been set.
func (o *AttributeDTO) HasEditable() bool {
	if o != nil && o.Editable != nil {
		return true
	}

	return false
}

// SetEditable gets a reference to the given bool and assigns it to the Editable field.
func (o *AttributeDTO) SetEditable(v bool) {
	o.Editable = &v
}

// GetRemovable returns the Removable field value if set, zero value otherwise.
func (o *AttributeDTO) GetRemovable() bool {
	if o == nil || o.Removable == nil {
		var ret bool
		return ret
	}
	return *o.Removable
}

// GetRemovableOk returns a tuple with the Removable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AttributeDTO) GetRemovableOk() (*bool, bool) {
	if o == nil || o.Removable == nil {
		return nil, false
	}
	return o.Removable, true
}

// HasRemovable returns a boolean if a field has been set.
func (o *AttributeDTO) HasRemovable() bool {
	if o != nil && o.Removable != nil {
		return true
	}

	return false
}

// SetRemovable gets a reference to the given bool and assigns it to the Removable field.
func (o *AttributeDTO) SetRemovable(v bool) {
	o.Removable = &v
}

// GetRepeatable returns the Repeatable field value if set, zero value otherwise.
func (o *AttributeDTO) GetRepeatable() bool {
	if o == nil || o.Repeatable == nil {
		var ret bool
		return ret
	}
	return *o.Repeatable
}

// GetRepeatableOk returns a tuple with the Repeatable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AttributeDTO) GetRepeatableOk() (*bool, bool) {
	if o == nil || o.Repeatable == nil {
		return nil, false
	}
	return o.Repeatable, true
}

// HasRepeatable returns a boolean if a field has been set.
func (o *AttributeDTO) HasRepeatable() bool {
	if o != nil && o.Repeatable != nil {
		return true
	}

	return false
}

// SetRepeatable gets a reference to the given bool and assigns it to the Repeatable field.
func (o *AttributeDTO) SetRepeatable(v bool) {
	o.Repeatable = &v
}

// GetBatchEditable returns the BatchEditable field value if set, zero value otherwise.
func (o *AttributeDTO) GetBatchEditable() bool {
	if o == nil || o.BatchEditable == nil {
		var ret bool
		return ret
	}
	return *o.BatchEditable
}

// GetBatchEditableOk returns a tuple with the BatchEditable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AttributeDTO) GetBatchEditableOk() (*bool, bool) {
	if o == nil || o.BatchEditable == nil {
		return nil, false
	}
	return o.BatchEditable, true
}

// HasBatchEditable returns a boolean if a field has been set.
func (o *AttributeDTO) HasBatchEditable() bool {
	if o != nil && o.BatchEditable != nil {
		return true
	}

	return false
}

// SetBatchEditable gets a reference to the given bool and assigns it to the BatchEditable field.
func (o *AttributeDTO) SetBatchEditable(v bool) {
	o.BatchEditable = &v
}

func (o AttributeDTO) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["attributeId"] = o.AttributeId
	}
	if true {
		toSerialize["attributeName"] = o.AttributeName
	}
	if true {
		toSerialize["values"] = o.Values
	}
	if true {
		toSerialize["creatorId"] = o.CreatorId
	}
	if true {
		toSerialize["editorId"] = o.EditorId
	}
	if o.Description.IsSet() {
		toSerialize["description"] = o.Description.Get()
	}
	if o.Editable != nil {
		toSerialize["editable"] = o.Editable
	}
	if o.Removable != nil {
		toSerialize["removable"] = o.Removable
	}
	if o.Repeatable != nil {
		toSerialize["repeatable"] = o.Repeatable
	}
	if o.BatchEditable != nil {
		toSerialize["batchEditable"] = o.BatchEditable
	}
	return json.Marshal(toSerialize)
}

type NullableAttributeDTO struct {
	value *AttributeDTO
	isSet bool
}

func (v NullableAttributeDTO) Get() *AttributeDTO {
	return v.value
}

func (v *NullableAttributeDTO) Set(val *AttributeDTO) {
	v.value = val
	v.isSet = true
}

func (v NullableAttributeDTO) IsSet() bool {
	return v.isSet
}

func (v *NullableAttributeDTO) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAttributeDTO(val *AttributeDTO) *NullableAttributeDTO {
	return &NullableAttributeDTO{value: val, isSet: true}
}

func (v NullableAttributeDTO) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAttributeDTO) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


