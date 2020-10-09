# CreateAttributeValueDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **string** |  | 
**Description** | Pointer to **NullableString** |  | [optional] 
**CssDirectives** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewCreateAttributeValueDTO

`func NewCreateAttributeValueDTO(value string, ) *CreateAttributeValueDTO`

NewCreateAttributeValueDTO instantiates a new CreateAttributeValueDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateAttributeValueDTOWithDefaults

`func NewCreateAttributeValueDTOWithDefaults() *CreateAttributeValueDTO`

NewCreateAttributeValueDTOWithDefaults instantiates a new CreateAttributeValueDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *CreateAttributeValueDTO) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *CreateAttributeValueDTO) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *CreateAttributeValueDTO) SetValue(v string)`

SetValue sets Value field to given value.


### GetDescription

`func (o *CreateAttributeValueDTO) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateAttributeValueDTO) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateAttributeValueDTO) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CreateAttributeValueDTO) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *CreateAttributeValueDTO) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *CreateAttributeValueDTO) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetCssDirectives

`func (o *CreateAttributeValueDTO) GetCssDirectives() string`

GetCssDirectives returns the CssDirectives field if non-nil, zero value otherwise.

### GetCssDirectivesOk

`func (o *CreateAttributeValueDTO) GetCssDirectivesOk() (*string, bool)`

GetCssDirectivesOk returns a tuple with the CssDirectives field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCssDirectives

`func (o *CreateAttributeValueDTO) SetCssDirectives(v string)`

SetCssDirectives sets CssDirectives field to given value.

### HasCssDirectives

`func (o *CreateAttributeValueDTO) HasCssDirectives() bool`

HasCssDirectives returns a boolean if a field has been set.

### SetCssDirectivesNil

`func (o *CreateAttributeValueDTO) SetCssDirectivesNil(b bool)`

 SetCssDirectivesNil sets the value for CssDirectives to be an explicit nil

### UnsetCssDirectives
`func (o *CreateAttributeValueDTO) UnsetCssDirectives()`

UnsetCssDirectives ensures that no value is present for CssDirectives, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


