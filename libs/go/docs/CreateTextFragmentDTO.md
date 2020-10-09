# CreateTextFragmentDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**PreviousTextFragmentId** | Pointer to **NullableInt32** |  | [optional] 
**NextTextFragmentId** | Pointer to **NullableInt32** |  | [optional] 

## Methods

### NewCreateTextFragmentDTO

`func NewCreateTextFragmentDTO(name string, ) *CreateTextFragmentDTO`

NewCreateTextFragmentDTO instantiates a new CreateTextFragmentDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateTextFragmentDTOWithDefaults

`func NewCreateTextFragmentDTOWithDefaults() *CreateTextFragmentDTO`

NewCreateTextFragmentDTOWithDefaults instantiates a new CreateTextFragmentDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CreateTextFragmentDTO) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateTextFragmentDTO) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateTextFragmentDTO) SetName(v string)`

SetName sets Name field to given value.


### GetPreviousTextFragmentId

`func (o *CreateTextFragmentDTO) GetPreviousTextFragmentId() int32`

GetPreviousTextFragmentId returns the PreviousTextFragmentId field if non-nil, zero value otherwise.

### GetPreviousTextFragmentIdOk

`func (o *CreateTextFragmentDTO) GetPreviousTextFragmentIdOk() (*int32, bool)`

GetPreviousTextFragmentIdOk returns a tuple with the PreviousTextFragmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousTextFragmentId

`func (o *CreateTextFragmentDTO) SetPreviousTextFragmentId(v int32)`

SetPreviousTextFragmentId sets PreviousTextFragmentId field to given value.

### HasPreviousTextFragmentId

`func (o *CreateTextFragmentDTO) HasPreviousTextFragmentId() bool`

HasPreviousTextFragmentId returns a boolean if a field has been set.

### SetPreviousTextFragmentIdNil

`func (o *CreateTextFragmentDTO) SetPreviousTextFragmentIdNil(b bool)`

 SetPreviousTextFragmentIdNil sets the value for PreviousTextFragmentId to be an explicit nil

### UnsetPreviousTextFragmentId
`func (o *CreateTextFragmentDTO) UnsetPreviousTextFragmentId()`

UnsetPreviousTextFragmentId ensures that no value is present for PreviousTextFragmentId, not even an explicit nil
### GetNextTextFragmentId

`func (o *CreateTextFragmentDTO) GetNextTextFragmentId() int32`

GetNextTextFragmentId returns the NextTextFragmentId field if non-nil, zero value otherwise.

### GetNextTextFragmentIdOk

`func (o *CreateTextFragmentDTO) GetNextTextFragmentIdOk() (*int32, bool)`

GetNextTextFragmentIdOk returns a tuple with the NextTextFragmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextTextFragmentId

`func (o *CreateTextFragmentDTO) SetNextTextFragmentId(v int32)`

SetNextTextFragmentId sets NextTextFragmentId field to given value.

### HasNextTextFragmentId

`func (o *CreateTextFragmentDTO) HasNextTextFragmentId() bool`

HasNextTextFragmentId returns a boolean if a field has been set.

### SetNextTextFragmentIdNil

`func (o *CreateTextFragmentDTO) SetNextTextFragmentIdNil(b bool)`

 SetNextTextFragmentIdNil sets the value for NextTextFragmentId to be an explicit nil

### UnsetNextTextFragmentId
`func (o *CreateTextFragmentDTO) UnsetNextTextFragmentId()`

UnsetNextTextFragmentId ensures that no value is present for NextTextFragmentId, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


