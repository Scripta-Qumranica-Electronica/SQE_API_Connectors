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

// NewUserRequestDTO struct for NewUserRequestDTO
type NewUserRequestDTO struct {
	Email string `json:"email"`
	Password string `json:"password"`
	Organization NullableString `json:"organization,omitempty"`
	Forename NullableString `json:"forename,omitempty"`
	Surname NullableString `json:"surname,omitempty"`
}

// NewNewUserRequestDTO instantiates a new NewUserRequestDTO object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewNewUserRequestDTO(email string, password string, ) *NewUserRequestDTO {
	this := NewUserRequestDTO{}
	this.Email = email
	this.Password = password
	return &this
}

// NewNewUserRequestDTOWithDefaults instantiates a new NewUserRequestDTO object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewNewUserRequestDTOWithDefaults() *NewUserRequestDTO {
	this := NewUserRequestDTO{}
	return &this
}

// GetEmail returns the Email field value
func (o *NewUserRequestDTO) GetEmail() string {
	if o == nil  {
		var ret string
		return ret
	}

	return o.Email
}

// GetEmailOk returns a tuple with the Email field value
// and a boolean to check if the value has been set.
func (o *NewUserRequestDTO) GetEmailOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Email, true
}

// SetEmail sets field value
func (o *NewUserRequestDTO) SetEmail(v string) {
	o.Email = v
}

// GetPassword returns the Password field value
func (o *NewUserRequestDTO) GetPassword() string {
	if o == nil  {
		var ret string
		return ret
	}

	return o.Password
}

// GetPasswordOk returns a tuple with the Password field value
// and a boolean to check if the value has been set.
func (o *NewUserRequestDTO) GetPasswordOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Password, true
}

// SetPassword sets field value
func (o *NewUserRequestDTO) SetPassword(v string) {
	o.Password = v
}

// GetOrganization returns the Organization field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *NewUserRequestDTO) GetOrganization() string {
	if o == nil || o.Organization.Get() == nil {
		var ret string
		return ret
	}
	return *o.Organization.Get()
}

// GetOrganizationOk returns a tuple with the Organization field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *NewUserRequestDTO) GetOrganizationOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Organization.Get(), o.Organization.IsSet()
}

// HasOrganization returns a boolean if a field has been set.
func (o *NewUserRequestDTO) HasOrganization() bool {
	if o != nil && o.Organization.IsSet() {
		return true
	}

	return false
}

// SetOrganization gets a reference to the given NullableString and assigns it to the Organization field.
func (o *NewUserRequestDTO) SetOrganization(v string) {
	o.Organization.Set(&v)
}
// SetOrganizationNil sets the value for Organization to be an explicit nil
func (o *NewUserRequestDTO) SetOrganizationNil() {
	o.Organization.Set(nil)
}

// UnsetOrganization ensures that no value is present for Organization, not even an explicit nil
func (o *NewUserRequestDTO) UnsetOrganization() {
	o.Organization.Unset()
}

// GetForename returns the Forename field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *NewUserRequestDTO) GetForename() string {
	if o == nil || o.Forename.Get() == nil {
		var ret string
		return ret
	}
	return *o.Forename.Get()
}

// GetForenameOk returns a tuple with the Forename field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *NewUserRequestDTO) GetForenameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Forename.Get(), o.Forename.IsSet()
}

// HasForename returns a boolean if a field has been set.
func (o *NewUserRequestDTO) HasForename() bool {
	if o != nil && o.Forename.IsSet() {
		return true
	}

	return false
}

// SetForename gets a reference to the given NullableString and assigns it to the Forename field.
func (o *NewUserRequestDTO) SetForename(v string) {
	o.Forename.Set(&v)
}
// SetForenameNil sets the value for Forename to be an explicit nil
func (o *NewUserRequestDTO) SetForenameNil() {
	o.Forename.Set(nil)
}

// UnsetForename ensures that no value is present for Forename, not even an explicit nil
func (o *NewUserRequestDTO) UnsetForename() {
	o.Forename.Unset()
}

// GetSurname returns the Surname field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *NewUserRequestDTO) GetSurname() string {
	if o == nil || o.Surname.Get() == nil {
		var ret string
		return ret
	}
	return *o.Surname.Get()
}

// GetSurnameOk returns a tuple with the Surname field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *NewUserRequestDTO) GetSurnameOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Surname.Get(), o.Surname.IsSet()
}

// HasSurname returns a boolean if a field has been set.
func (o *NewUserRequestDTO) HasSurname() bool {
	if o != nil && o.Surname.IsSet() {
		return true
	}

	return false
}

// SetSurname gets a reference to the given NullableString and assigns it to the Surname field.
func (o *NewUserRequestDTO) SetSurname(v string) {
	o.Surname.Set(&v)
}
// SetSurnameNil sets the value for Surname to be an explicit nil
func (o *NewUserRequestDTO) SetSurnameNil() {
	o.Surname.Set(nil)
}

// UnsetSurname ensures that no value is present for Surname, not even an explicit nil
func (o *NewUserRequestDTO) UnsetSurname() {
	o.Surname.Unset()
}

func (o NewUserRequestDTO) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["email"] = o.Email
	}
	if true {
		toSerialize["password"] = o.Password
	}
	if o.Organization.IsSet() {
		toSerialize["organization"] = o.Organization.Get()
	}
	if o.Forename.IsSet() {
		toSerialize["forename"] = o.Forename.Get()
	}
	if o.Surname.IsSet() {
		toSerialize["surname"] = o.Surname.Get()
	}
	return json.Marshal(toSerialize)
}

type NullableNewUserRequestDTO struct {
	value *NewUserRequestDTO
	isSet bool
}

func (v NullableNewUserRequestDTO) Get() *NewUserRequestDTO {
	return v.value
}

func (v *NullableNewUserRequestDTO) Set(val *NewUserRequestDTO) {
	v.value = val
	v.isSet = true
}

func (v NullableNewUserRequestDTO) IsSet() bool {
	return v.isSet
}

func (v *NullableNewUserRequestDTO) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableNewUserRequestDTO(val *NewUserRequestDTO) *NullableNewUserRequestDTO {
	return &NullableNewUserRequestDTO{value: val, isSet: true}
}

func (v NullableNewUserRequestDTO) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableNewUserRequestDTO) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


