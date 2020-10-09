# ImageDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ImageToImageMapEditorId** | Pointer to **NullableInt32** |  | [optional] 
**RegionInMasterImage** | Pointer to **NullableString** |  | [optional] 
**RegionInImage** | Pointer to **NullableString** |  | [optional] 
**TransformToMaster** | Pointer to **NullableString** |  | [optional] 
**Id** | **int32** |  | 
**Url** | **string** |  | 
**LightingType** | [**Lighting**](Lighting.md) |  | 
**LightingDirection** | [**Direction**](Direction.md) |  | 
**WaveLength** | **[]string** |  | 
**Type** | **string** |  | 
**Side** | [**SideDesignation**](SideDesignation.md) |  | 
**Ppi** | **int32** |  | 
**Master** | **bool** |  | 
**CatalogNumber** | **int32** |  | 

## Methods

### NewImageDTO

`func NewImageDTO(id int32, url string, lightingType Lighting, lightingDirection Direction, waveLength []string, type_ string, side SideDesignation, ppi int32, master bool, catalogNumber int32, ) *ImageDTO`

NewImageDTO instantiates a new ImageDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImageDTOWithDefaults

`func NewImageDTOWithDefaults() *ImageDTO`

NewImageDTOWithDefaults instantiates a new ImageDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetImageToImageMapEditorId

`func (o *ImageDTO) GetImageToImageMapEditorId() int32`

GetImageToImageMapEditorId returns the ImageToImageMapEditorId field if non-nil, zero value otherwise.

### GetImageToImageMapEditorIdOk

`func (o *ImageDTO) GetImageToImageMapEditorIdOk() (*int32, bool)`

GetImageToImageMapEditorIdOk returns a tuple with the ImageToImageMapEditorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageToImageMapEditorId

`func (o *ImageDTO) SetImageToImageMapEditorId(v int32)`

SetImageToImageMapEditorId sets ImageToImageMapEditorId field to given value.

### HasImageToImageMapEditorId

`func (o *ImageDTO) HasImageToImageMapEditorId() bool`

HasImageToImageMapEditorId returns a boolean if a field has been set.

### SetImageToImageMapEditorIdNil

`func (o *ImageDTO) SetImageToImageMapEditorIdNil(b bool)`

 SetImageToImageMapEditorIdNil sets the value for ImageToImageMapEditorId to be an explicit nil

### UnsetImageToImageMapEditorId
`func (o *ImageDTO) UnsetImageToImageMapEditorId()`

UnsetImageToImageMapEditorId ensures that no value is present for ImageToImageMapEditorId, not even an explicit nil
### GetRegionInMasterImage

`func (o *ImageDTO) GetRegionInMasterImage() string`

GetRegionInMasterImage returns the RegionInMasterImage field if non-nil, zero value otherwise.

### GetRegionInMasterImageOk

`func (o *ImageDTO) GetRegionInMasterImageOk() (*string, bool)`

GetRegionInMasterImageOk returns a tuple with the RegionInMasterImage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegionInMasterImage

`func (o *ImageDTO) SetRegionInMasterImage(v string)`

SetRegionInMasterImage sets RegionInMasterImage field to given value.

### HasRegionInMasterImage

`func (o *ImageDTO) HasRegionInMasterImage() bool`

HasRegionInMasterImage returns a boolean if a field has been set.

### SetRegionInMasterImageNil

`func (o *ImageDTO) SetRegionInMasterImageNil(b bool)`

 SetRegionInMasterImageNil sets the value for RegionInMasterImage to be an explicit nil

### UnsetRegionInMasterImage
`func (o *ImageDTO) UnsetRegionInMasterImage()`

UnsetRegionInMasterImage ensures that no value is present for RegionInMasterImage, not even an explicit nil
### GetRegionInImage

`func (o *ImageDTO) GetRegionInImage() string`

GetRegionInImage returns the RegionInImage field if non-nil, zero value otherwise.

### GetRegionInImageOk

`func (o *ImageDTO) GetRegionInImageOk() (*string, bool)`

GetRegionInImageOk returns a tuple with the RegionInImage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegionInImage

`func (o *ImageDTO) SetRegionInImage(v string)`

SetRegionInImage sets RegionInImage field to given value.

### HasRegionInImage

`func (o *ImageDTO) HasRegionInImage() bool`

HasRegionInImage returns a boolean if a field has been set.

### SetRegionInImageNil

`func (o *ImageDTO) SetRegionInImageNil(b bool)`

 SetRegionInImageNil sets the value for RegionInImage to be an explicit nil

### UnsetRegionInImage
`func (o *ImageDTO) UnsetRegionInImage()`

UnsetRegionInImage ensures that no value is present for RegionInImage, not even an explicit nil
### GetTransformToMaster

`func (o *ImageDTO) GetTransformToMaster() string`

GetTransformToMaster returns the TransformToMaster field if non-nil, zero value otherwise.

### GetTransformToMasterOk

`func (o *ImageDTO) GetTransformToMasterOk() (*string, bool)`

GetTransformToMasterOk returns a tuple with the TransformToMaster field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransformToMaster

`func (o *ImageDTO) SetTransformToMaster(v string)`

SetTransformToMaster sets TransformToMaster field to given value.

### HasTransformToMaster

`func (o *ImageDTO) HasTransformToMaster() bool`

HasTransformToMaster returns a boolean if a field has been set.

### SetTransformToMasterNil

`func (o *ImageDTO) SetTransformToMasterNil(b bool)`

 SetTransformToMasterNil sets the value for TransformToMaster to be an explicit nil

### UnsetTransformToMaster
`func (o *ImageDTO) UnsetTransformToMaster()`

UnsetTransformToMaster ensures that no value is present for TransformToMaster, not even an explicit nil
### GetId

`func (o *ImageDTO) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ImageDTO) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ImageDTO) SetId(v int32)`

SetId sets Id field to given value.


### GetUrl

`func (o *ImageDTO) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *ImageDTO) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *ImageDTO) SetUrl(v string)`

SetUrl sets Url field to given value.


### GetLightingType

`func (o *ImageDTO) GetLightingType() Lighting`

GetLightingType returns the LightingType field if non-nil, zero value otherwise.

### GetLightingTypeOk

`func (o *ImageDTO) GetLightingTypeOk() (*Lighting, bool)`

GetLightingTypeOk returns a tuple with the LightingType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLightingType

`func (o *ImageDTO) SetLightingType(v Lighting)`

SetLightingType sets LightingType field to given value.


### GetLightingDirection

`func (o *ImageDTO) GetLightingDirection() Direction`

GetLightingDirection returns the LightingDirection field if non-nil, zero value otherwise.

### GetLightingDirectionOk

`func (o *ImageDTO) GetLightingDirectionOk() (*Direction, bool)`

GetLightingDirectionOk returns a tuple with the LightingDirection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLightingDirection

`func (o *ImageDTO) SetLightingDirection(v Direction)`

SetLightingDirection sets LightingDirection field to given value.


### GetWaveLength

`func (o *ImageDTO) GetWaveLength() []string`

GetWaveLength returns the WaveLength field if non-nil, zero value otherwise.

### GetWaveLengthOk

`func (o *ImageDTO) GetWaveLengthOk() (*[]string, bool)`

GetWaveLengthOk returns a tuple with the WaveLength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaveLength

`func (o *ImageDTO) SetWaveLength(v []string)`

SetWaveLength sets WaveLength field to given value.


### GetType

`func (o *ImageDTO) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ImageDTO) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ImageDTO) SetType(v string)`

SetType sets Type field to given value.


### GetSide

`func (o *ImageDTO) GetSide() SideDesignation`

GetSide returns the Side field if non-nil, zero value otherwise.

### GetSideOk

`func (o *ImageDTO) GetSideOk() (*SideDesignation, bool)`

GetSideOk returns a tuple with the Side field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSide

`func (o *ImageDTO) SetSide(v SideDesignation)`

SetSide sets Side field to given value.


### GetPpi

`func (o *ImageDTO) GetPpi() int32`

GetPpi returns the Ppi field if non-nil, zero value otherwise.

### GetPpiOk

`func (o *ImageDTO) GetPpiOk() (*int32, bool)`

GetPpiOk returns a tuple with the Ppi field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPpi

`func (o *ImageDTO) SetPpi(v int32)`

SetPpi sets Ppi field to given value.


### GetMaster

`func (o *ImageDTO) GetMaster() bool`

GetMaster returns the Master field if non-nil, zero value otherwise.

### GetMasterOk

`func (o *ImageDTO) GetMasterOk() (*bool, bool)`

GetMasterOk returns a tuple with the Master field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaster

`func (o *ImageDTO) SetMaster(v bool)`

SetMaster sets Master field to given value.


### GetCatalogNumber

`func (o *ImageDTO) GetCatalogNumber() int32`

GetCatalogNumber returns the CatalogNumber field if non-nil, zero value otherwise.

### GetCatalogNumberOk

`func (o *ImageDTO) GetCatalogNumberOk() (*int32, bool)`

GetCatalogNumberOk returns a tuple with the CatalogNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatalogNumber

`func (o *ImageDTO) SetCatalogNumber(v int32)`

SetCatalogNumber sets CatalogNumber field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


