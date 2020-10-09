# CatalogueMatchInputDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CatalogSide** | Pointer to [**SideDesignation**](SideDesignation.md) |  | [optional] 
**ImagedObjectId** | **string** |  | 
**ManuscriptId** | **int32** |  | 
**EditionName** | **string** |  | 
**EditionVolume** | **string** |  | 
**EditionLocation1** | **string** |  | 
**EditionLocation2** | **string** |  | 
**EditionSide** | [**SideDesignation**](SideDesignation.md) |  | 
**Comment** | Pointer to **NullableString** |  | [optional] 
**TextFragmentId** | **int32** |  | 
**EditionId** | **int32** |  | 
**Confirmed** | Pointer to **NullableBool** |  | [optional] 

## Methods

### NewCatalogueMatchInputDTO

`func NewCatalogueMatchInputDTO(imagedObjectId string, manuscriptId int32, editionName string, editionVolume string, editionLocation1 string, editionLocation2 string, editionSide SideDesignation, textFragmentId int32, editionId int32, ) *CatalogueMatchInputDTO`

NewCatalogueMatchInputDTO instantiates a new CatalogueMatchInputDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCatalogueMatchInputDTOWithDefaults

`func NewCatalogueMatchInputDTOWithDefaults() *CatalogueMatchInputDTO`

NewCatalogueMatchInputDTOWithDefaults instantiates a new CatalogueMatchInputDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCatalogSide

`func (o *CatalogueMatchInputDTO) GetCatalogSide() SideDesignation`

GetCatalogSide returns the CatalogSide field if non-nil, zero value otherwise.

### GetCatalogSideOk

`func (o *CatalogueMatchInputDTO) GetCatalogSideOk() (*SideDesignation, bool)`

GetCatalogSideOk returns a tuple with the CatalogSide field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatalogSide

`func (o *CatalogueMatchInputDTO) SetCatalogSide(v SideDesignation)`

SetCatalogSide sets CatalogSide field to given value.

### HasCatalogSide

`func (o *CatalogueMatchInputDTO) HasCatalogSide() bool`

HasCatalogSide returns a boolean if a field has been set.

### GetImagedObjectId

`func (o *CatalogueMatchInputDTO) GetImagedObjectId() string`

GetImagedObjectId returns the ImagedObjectId field if non-nil, zero value otherwise.

### GetImagedObjectIdOk

`func (o *CatalogueMatchInputDTO) GetImagedObjectIdOk() (*string, bool)`

GetImagedObjectIdOk returns a tuple with the ImagedObjectId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImagedObjectId

`func (o *CatalogueMatchInputDTO) SetImagedObjectId(v string)`

SetImagedObjectId sets ImagedObjectId field to given value.


### GetManuscriptId

`func (o *CatalogueMatchInputDTO) GetManuscriptId() int32`

GetManuscriptId returns the ManuscriptId field if non-nil, zero value otherwise.

### GetManuscriptIdOk

`func (o *CatalogueMatchInputDTO) GetManuscriptIdOk() (*int32, bool)`

GetManuscriptIdOk returns a tuple with the ManuscriptId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuscriptId

`func (o *CatalogueMatchInputDTO) SetManuscriptId(v int32)`

SetManuscriptId sets ManuscriptId field to given value.


### GetEditionName

`func (o *CatalogueMatchInputDTO) GetEditionName() string`

GetEditionName returns the EditionName field if non-nil, zero value otherwise.

### GetEditionNameOk

`func (o *CatalogueMatchInputDTO) GetEditionNameOk() (*string, bool)`

GetEditionNameOk returns a tuple with the EditionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditionName

`func (o *CatalogueMatchInputDTO) SetEditionName(v string)`

SetEditionName sets EditionName field to given value.


### GetEditionVolume

`func (o *CatalogueMatchInputDTO) GetEditionVolume() string`

GetEditionVolume returns the EditionVolume field if non-nil, zero value otherwise.

### GetEditionVolumeOk

`func (o *CatalogueMatchInputDTO) GetEditionVolumeOk() (*string, bool)`

GetEditionVolumeOk returns a tuple with the EditionVolume field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditionVolume

`func (o *CatalogueMatchInputDTO) SetEditionVolume(v string)`

SetEditionVolume sets EditionVolume field to given value.


### GetEditionLocation1

`func (o *CatalogueMatchInputDTO) GetEditionLocation1() string`

GetEditionLocation1 returns the EditionLocation1 field if non-nil, zero value otherwise.

### GetEditionLocation1Ok

`func (o *CatalogueMatchInputDTO) GetEditionLocation1Ok() (*string, bool)`

GetEditionLocation1Ok returns a tuple with the EditionLocation1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditionLocation1

`func (o *CatalogueMatchInputDTO) SetEditionLocation1(v string)`

SetEditionLocation1 sets EditionLocation1 field to given value.


### GetEditionLocation2

`func (o *CatalogueMatchInputDTO) GetEditionLocation2() string`

GetEditionLocation2 returns the EditionLocation2 field if non-nil, zero value otherwise.

### GetEditionLocation2Ok

`func (o *CatalogueMatchInputDTO) GetEditionLocation2Ok() (*string, bool)`

GetEditionLocation2Ok returns a tuple with the EditionLocation2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditionLocation2

`func (o *CatalogueMatchInputDTO) SetEditionLocation2(v string)`

SetEditionLocation2 sets EditionLocation2 field to given value.


### GetEditionSide

`func (o *CatalogueMatchInputDTO) GetEditionSide() SideDesignation`

GetEditionSide returns the EditionSide field if non-nil, zero value otherwise.

### GetEditionSideOk

`func (o *CatalogueMatchInputDTO) GetEditionSideOk() (*SideDesignation, bool)`

GetEditionSideOk returns a tuple with the EditionSide field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditionSide

`func (o *CatalogueMatchInputDTO) SetEditionSide(v SideDesignation)`

SetEditionSide sets EditionSide field to given value.


### GetComment

`func (o *CatalogueMatchInputDTO) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *CatalogueMatchInputDTO) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *CatalogueMatchInputDTO) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *CatalogueMatchInputDTO) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *CatalogueMatchInputDTO) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *CatalogueMatchInputDTO) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil
### GetTextFragmentId

`func (o *CatalogueMatchInputDTO) GetTextFragmentId() int32`

GetTextFragmentId returns the TextFragmentId field if non-nil, zero value otherwise.

### GetTextFragmentIdOk

`func (o *CatalogueMatchInputDTO) GetTextFragmentIdOk() (*int32, bool)`

GetTextFragmentIdOk returns a tuple with the TextFragmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextFragmentId

`func (o *CatalogueMatchInputDTO) SetTextFragmentId(v int32)`

SetTextFragmentId sets TextFragmentId field to given value.


### GetEditionId

`func (o *CatalogueMatchInputDTO) GetEditionId() int32`

GetEditionId returns the EditionId field if non-nil, zero value otherwise.

### GetEditionIdOk

`func (o *CatalogueMatchInputDTO) GetEditionIdOk() (*int32, bool)`

GetEditionIdOk returns a tuple with the EditionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditionId

`func (o *CatalogueMatchInputDTO) SetEditionId(v int32)`

SetEditionId sets EditionId field to given value.


### GetConfirmed

`func (o *CatalogueMatchInputDTO) GetConfirmed() bool`

GetConfirmed returns the Confirmed field if non-nil, zero value otherwise.

### GetConfirmedOk

`func (o *CatalogueMatchInputDTO) GetConfirmedOk() (*bool, bool)`

GetConfirmedOk returns a tuple with the Confirmed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmed

`func (o *CatalogueMatchInputDTO) SetConfirmed(v bool)`

SetConfirmed sets Confirmed field to given value.

### HasConfirmed

`func (o *CatalogueMatchInputDTO) HasConfirmed() bool`

HasConfirmed returns a boolean if a field has been set.

### SetConfirmedNil

`func (o *CatalogueMatchInputDTO) SetConfirmedNil(b bool)`

 SetConfirmedNil sets the value for Confirmed to be an explicit nil

### UnsetConfirmed
`func (o *CatalogueMatchInputDTO) UnsetConfirmed()`

UnsetConfirmed ensures that no value is present for Confirmed, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


