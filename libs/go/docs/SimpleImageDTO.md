# SimpleImageDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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

### NewSimpleImageDTO

`func NewSimpleImageDTO(id int32, url string, lightingType Lighting, lightingDirection Direction, waveLength []string, type_ string, side SideDesignation, ppi int32, master bool, catalogNumber int32, ) *SimpleImageDTO`

NewSimpleImageDTO instantiates a new SimpleImageDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSimpleImageDTOWithDefaults

`func NewSimpleImageDTOWithDefaults() *SimpleImageDTO`

NewSimpleImageDTOWithDefaults instantiates a new SimpleImageDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SimpleImageDTO) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SimpleImageDTO) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SimpleImageDTO) SetId(v int32)`

SetId sets Id field to given value.


### GetUrl

`func (o *SimpleImageDTO) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *SimpleImageDTO) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *SimpleImageDTO) SetUrl(v string)`

SetUrl sets Url field to given value.


### GetLightingType

`func (o *SimpleImageDTO) GetLightingType() Lighting`

GetLightingType returns the LightingType field if non-nil, zero value otherwise.

### GetLightingTypeOk

`func (o *SimpleImageDTO) GetLightingTypeOk() (*Lighting, bool)`

GetLightingTypeOk returns a tuple with the LightingType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLightingType

`func (o *SimpleImageDTO) SetLightingType(v Lighting)`

SetLightingType sets LightingType field to given value.


### GetLightingDirection

`func (o *SimpleImageDTO) GetLightingDirection() Direction`

GetLightingDirection returns the LightingDirection field if non-nil, zero value otherwise.

### GetLightingDirectionOk

`func (o *SimpleImageDTO) GetLightingDirectionOk() (*Direction, bool)`

GetLightingDirectionOk returns a tuple with the LightingDirection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLightingDirection

`func (o *SimpleImageDTO) SetLightingDirection(v Direction)`

SetLightingDirection sets LightingDirection field to given value.


### GetWaveLength

`func (o *SimpleImageDTO) GetWaveLength() []string`

GetWaveLength returns the WaveLength field if non-nil, zero value otherwise.

### GetWaveLengthOk

`func (o *SimpleImageDTO) GetWaveLengthOk() (*[]string, bool)`

GetWaveLengthOk returns a tuple with the WaveLength field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaveLength

`func (o *SimpleImageDTO) SetWaveLength(v []string)`

SetWaveLength sets WaveLength field to given value.


### GetType

`func (o *SimpleImageDTO) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SimpleImageDTO) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SimpleImageDTO) SetType(v string)`

SetType sets Type field to given value.


### GetSide

`func (o *SimpleImageDTO) GetSide() SideDesignation`

GetSide returns the Side field if non-nil, zero value otherwise.

### GetSideOk

`func (o *SimpleImageDTO) GetSideOk() (*SideDesignation, bool)`

GetSideOk returns a tuple with the Side field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSide

`func (o *SimpleImageDTO) SetSide(v SideDesignation)`

SetSide sets Side field to given value.


### GetPpi

`func (o *SimpleImageDTO) GetPpi() int32`

GetPpi returns the Ppi field if non-nil, zero value otherwise.

### GetPpiOk

`func (o *SimpleImageDTO) GetPpiOk() (*int32, bool)`

GetPpiOk returns a tuple with the Ppi field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPpi

`func (o *SimpleImageDTO) SetPpi(v int32)`

SetPpi sets Ppi field to given value.


### GetMaster

`func (o *SimpleImageDTO) GetMaster() bool`

GetMaster returns the Master field if non-nil, zero value otherwise.

### GetMasterOk

`func (o *SimpleImageDTO) GetMasterOk() (*bool, bool)`

GetMasterOk returns a tuple with the Master field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaster

`func (o *SimpleImageDTO) SetMaster(v bool)`

SetMaster sets Master field to given value.


### GetCatalogNumber

`func (o *SimpleImageDTO) GetCatalogNumber() int32`

GetCatalogNumber returns the CatalogNumber field if non-nil, zero value otherwise.

### GetCatalogNumberOk

`func (o *SimpleImageDTO) GetCatalogNumberOk() (*int32, bool)`

GetCatalogNumberOk returns a tuple with the CatalogNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatalogNumber

`func (o *SimpleImageDTO) SetCatalogNumber(v int32)`

SetCatalogNumber sets CatalogNumber field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


