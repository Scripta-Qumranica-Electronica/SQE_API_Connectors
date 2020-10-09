# AttributeValueDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatorId** | **int32** |  | 
**EditorId** | **int32** |  | 
**Id** | **int32** |  | 
**Value** | **string** |  | 
**Description** | Pointer to **NullableString** |  | [optional] 
**CssDirectives** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewAttributeValueDTO

`func NewAttributeValueDTO(creatorId int32, editorId int32, id int32, value string, ) *AttributeValueDTO`

NewAttributeValueDTO instantiates a new AttributeValueDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributeValueDTOWithDefaults

`func NewAttributeValueDTOWithDefaults() *AttributeValueDTO`

NewAttributeValueDTOWithDefaults instantiates a new AttributeValueDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatorId

`func (o *AttributeValueDTO) GetCreatorId() int32`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *AttributeValueDTO) GetCreatorIdOk() (*int32, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *AttributeValueDTO) SetCreatorId(v int32)`

SetCreatorId sets CreatorId field to given value.


### GetEditorId

`func (o *AttributeValueDTO) GetEditorId() int32`

GetEditorId returns the EditorId field if non-nil, zero value otherwise.

### GetEditorIdOk

`func (o *AttributeValueDTO) GetEditorIdOk() (*int32, bool)`

GetEditorIdOk returns a tuple with the EditorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditorId

`func (o *AttributeValueDTO) SetEditorId(v int32)`

SetEditorId sets EditorId field to given value.


### GetId

`func (o *AttributeValueDTO) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AttributeValueDTO) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AttributeValueDTO) SetId(v int32)`

SetId sets Id field to given value.


### GetValue

`func (o *AttributeValueDTO) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *AttributeValueDTO) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *AttributeValueDTO) SetValue(v string)`

SetValue sets Value field to given value.


### GetDescription

`func (o *AttributeValueDTO) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AttributeValueDTO) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AttributeValueDTO) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AttributeValueDTO) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *AttributeValueDTO) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *AttributeValueDTO) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetCssDirectives

`func (o *AttributeValueDTO) GetCssDirectives() string`

GetCssDirectives returns the CssDirectives field if non-nil, zero value otherwise.

### GetCssDirectivesOk

`func (o *AttributeValueDTO) GetCssDirectivesOk() (*string, bool)`

GetCssDirectivesOk returns a tuple with the CssDirectives field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCssDirectives

`func (o *AttributeValueDTO) SetCssDirectives(v string)`

SetCssDirectives sets CssDirectives field to given value.

### HasCssDirectives

`func (o *AttributeValueDTO) HasCssDirectives() bool`

HasCssDirectives returns a boolean if a field has been set.

### SetCssDirectivesNil

`func (o *AttributeValueDTO) SetCssDirectivesNil(b bool)`

 SetCssDirectivesNil sets the value for CssDirectives to be an explicit nil

### UnsetCssDirectives
`func (o *AttributeValueDTO) UnsetCssDirectives()`

UnsetCssDirectives ensures that no value is present for CssDirectives, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


