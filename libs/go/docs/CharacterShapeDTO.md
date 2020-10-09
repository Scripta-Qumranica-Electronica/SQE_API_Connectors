# CharacterShapeDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Character** | **string** |  | 
**Polygon** | **string** |  | 
**ImageURL** | **string** |  | 
**Rotation** | Pointer to **float32** |  | [optional] 
**Attributes** | **[]string** |  | 

## Methods

### NewCharacterShapeDTO

`func NewCharacterShapeDTO(id int32, character string, polygon string, imageURL string, attributes []string, ) *CharacterShapeDTO`

NewCharacterShapeDTO instantiates a new CharacterShapeDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCharacterShapeDTOWithDefaults

`func NewCharacterShapeDTOWithDefaults() *CharacterShapeDTO`

NewCharacterShapeDTOWithDefaults instantiates a new CharacterShapeDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CharacterShapeDTO) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CharacterShapeDTO) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CharacterShapeDTO) SetId(v int32)`

SetId sets Id field to given value.


### GetCharacter

`func (o *CharacterShapeDTO) GetCharacter() string`

GetCharacter returns the Character field if non-nil, zero value otherwise.

### GetCharacterOk

`func (o *CharacterShapeDTO) GetCharacterOk() (*string, bool)`

GetCharacterOk returns a tuple with the Character field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharacter

`func (o *CharacterShapeDTO) SetCharacter(v string)`

SetCharacter sets Character field to given value.


### GetPolygon

`func (o *CharacterShapeDTO) GetPolygon() string`

GetPolygon returns the Polygon field if non-nil, zero value otherwise.

### GetPolygonOk

`func (o *CharacterShapeDTO) GetPolygonOk() (*string, bool)`

GetPolygonOk returns a tuple with the Polygon field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolygon

`func (o *CharacterShapeDTO) SetPolygon(v string)`

SetPolygon sets Polygon field to given value.


### GetImageURL

`func (o *CharacterShapeDTO) GetImageURL() string`

GetImageURL returns the ImageURL field if non-nil, zero value otherwise.

### GetImageURLOk

`func (o *CharacterShapeDTO) GetImageURLOk() (*string, bool)`

GetImageURLOk returns a tuple with the ImageURL field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageURL

`func (o *CharacterShapeDTO) SetImageURL(v string)`

SetImageURL sets ImageURL field to given value.


### GetRotation

`func (o *CharacterShapeDTO) GetRotation() float32`

GetRotation returns the Rotation field if non-nil, zero value otherwise.

### GetRotationOk

`func (o *CharacterShapeDTO) GetRotationOk() (*float32, bool)`

GetRotationOk returns a tuple with the Rotation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRotation

`func (o *CharacterShapeDTO) SetRotation(v float32)`

SetRotation sets Rotation field to given value.

### HasRotation

`func (o *CharacterShapeDTO) HasRotation() bool`

HasRotation returns a boolean if a field has been set.

### GetAttributes

`func (o *CharacterShapeDTO) GetAttributes() []string`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *CharacterShapeDTO) GetAttributesOk() (*[]string, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *CharacterShapeDTO) SetAttributes(v []string)`

SetAttributes sets Attributes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


