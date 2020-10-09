# UpdateAttributeValueDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Value** | **string** |  | 
**Description** | Pointer to **NullableString** |  | [optional] 
**CssDirectives** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewUpdateAttributeValueDTO

`func NewUpdateAttributeValueDTO(id int32, value string, ) *UpdateAttributeValueDTO`

NewUpdateAttributeValueDTO instantiates a new UpdateAttributeValueDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateAttributeValueDTOWithDefaults

`func NewUpdateAttributeValueDTOWithDefaults() *UpdateAttributeValueDTO`

NewUpdateAttributeValueDTOWithDefaults instantiates a new UpdateAttributeValueDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *UpdateAttributeValueDTO) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *UpdateAttributeValueDTO) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *UpdateAttributeValueDTO) SetId(v int32)`

SetId sets Id field to given value.


### GetValue

`func (o *UpdateAttributeValueDTO) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *UpdateAttributeValueDTO) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *UpdateAttributeValueDTO) SetValue(v string)`

SetValue sets Value field to given value.


### GetDescription

`func (o *UpdateAttributeValueDTO) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *UpdateAttributeValueDTO) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *UpdateAttributeValueDTO) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *UpdateAttributeValueDTO) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *UpdateAttributeValueDTO) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *UpdateAttributeValueDTO) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetCssDirectives

`func (o *UpdateAttributeValueDTO) GetCssDirectives() string`

GetCssDirectives returns the CssDirectives field if non-nil, zero value otherwise.

### GetCssDirectivesOk

`func (o *UpdateAttributeValueDTO) GetCssDirectivesOk() (*string, bool)`

GetCssDirectivesOk returns a tuple with the CssDirectives field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCssDirectives

`func (o *UpdateAttributeValueDTO) SetCssDirectives(v string)`

SetCssDirectives sets CssDirectives field to given value.

### HasCssDirectives

`func (o *UpdateAttributeValueDTO) HasCssDirectives() bool`

HasCssDirectives returns a boolean if a field has been set.

### SetCssDirectivesNil

`func (o *UpdateAttributeValueDTO) SetCssDirectivesNil(b bool)`

 SetCssDirectivesNil sets the value for CssDirectives to be an explicit nil

### UnsetCssDirectives
`func (o *UpdateAttributeValueDTO) UnsetCssDirectives()`

UnsetCssDirectives ensures that no value is present for CssDirectives, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


