# LineDataDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LineId** | **int32** |  | 
**LineName** | **string** |  | 

## Methods

### NewLineDataDTO

`func NewLineDataDTO(lineId int32, lineName string, ) *LineDataDTO`

NewLineDataDTO instantiates a new LineDataDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLineDataDTOWithDefaults

`func NewLineDataDTOWithDefaults() *LineDataDTO`

NewLineDataDTOWithDefaults instantiates a new LineDataDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLineId

`func (o *LineDataDTO) GetLineId() int32`

GetLineId returns the LineId field if non-nil, zero value otherwise.

### GetLineIdOk

`func (o *LineDataDTO) GetLineIdOk() (*int32, bool)`

GetLineIdOk returns a tuple with the LineId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineId

`func (o *LineDataDTO) SetLineId(v int32)`

SetLineId sets LineId field to given value.


### GetLineName

`func (o *LineDataDTO) GetLineName() string`

GetLineName returns the LineName field if non-nil, zero value otherwise.

### GetLineNameOk

`func (o *LineDataDTO) GetLineNameOk() (*string, bool)`

GetLineNameOk returns a tuple with the LineName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineName

`func (o *LineDataDTO) SetLineName(v string)`

SetLineName sets LineName field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


