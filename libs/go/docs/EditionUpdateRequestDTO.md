# EditionUpdateRequestDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Metrics** | Pointer to [**NullableUpdateEditionManuscriptMetricsDTO**](UpdateEditionManuscriptMetricsDTO.md) |  | [optional] 
**Name** | Pointer to **NullableString** |  | [optional] 
**CopyrightHolder** | Pointer to **NullableString** |  | [optional] 
**Collaborators** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewEditionUpdateRequestDTO

`func NewEditionUpdateRequestDTO() *EditionUpdateRequestDTO`

NewEditionUpdateRequestDTO instantiates a new EditionUpdateRequestDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEditionUpdateRequestDTOWithDefaults

`func NewEditionUpdateRequestDTOWithDefaults() *EditionUpdateRequestDTO`

NewEditionUpdateRequestDTOWithDefaults instantiates a new EditionUpdateRequestDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMetrics

`func (o *EditionUpdateRequestDTO) GetMetrics() UpdateEditionManuscriptMetricsDTO`

GetMetrics returns the Metrics field if non-nil, zero value otherwise.

### GetMetricsOk

`func (o *EditionUpdateRequestDTO) GetMetricsOk() (*UpdateEditionManuscriptMetricsDTO, bool)`

GetMetricsOk returns a tuple with the Metrics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetrics

`func (o *EditionUpdateRequestDTO) SetMetrics(v UpdateEditionManuscriptMetricsDTO)`

SetMetrics sets Metrics field to given value.

### HasMetrics

`func (o *EditionUpdateRequestDTO) HasMetrics() bool`

HasMetrics returns a boolean if a field has been set.

### SetMetricsNil

`func (o *EditionUpdateRequestDTO) SetMetricsNil(b bool)`

 SetMetricsNil sets the value for Metrics to be an explicit nil

### UnsetMetrics
`func (o *EditionUpdateRequestDTO) UnsetMetrics()`

UnsetMetrics ensures that no value is present for Metrics, not even an explicit nil
### GetName

`func (o *EditionUpdateRequestDTO) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EditionUpdateRequestDTO) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EditionUpdateRequestDTO) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EditionUpdateRequestDTO) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *EditionUpdateRequestDTO) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *EditionUpdateRequestDTO) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCopyrightHolder

`func (o *EditionUpdateRequestDTO) GetCopyrightHolder() string`

GetCopyrightHolder returns the CopyrightHolder field if non-nil, zero value otherwise.

### GetCopyrightHolderOk

`func (o *EditionUpdateRequestDTO) GetCopyrightHolderOk() (*string, bool)`

GetCopyrightHolderOk returns a tuple with the CopyrightHolder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyrightHolder

`func (o *EditionUpdateRequestDTO) SetCopyrightHolder(v string)`

SetCopyrightHolder sets CopyrightHolder field to given value.

### HasCopyrightHolder

`func (o *EditionUpdateRequestDTO) HasCopyrightHolder() bool`

HasCopyrightHolder returns a boolean if a field has been set.

### SetCopyrightHolderNil

`func (o *EditionUpdateRequestDTO) SetCopyrightHolderNil(b bool)`

 SetCopyrightHolderNil sets the value for CopyrightHolder to be an explicit nil

### UnsetCopyrightHolder
`func (o *EditionUpdateRequestDTO) UnsetCopyrightHolder()`

UnsetCopyrightHolder ensures that no value is present for CopyrightHolder, not even an explicit nil
### GetCollaborators

`func (o *EditionUpdateRequestDTO) GetCollaborators() string`

GetCollaborators returns the Collaborators field if non-nil, zero value otherwise.

### GetCollaboratorsOk

`func (o *EditionUpdateRequestDTO) GetCollaboratorsOk() (*string, bool)`

GetCollaboratorsOk returns a tuple with the Collaborators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCollaborators

`func (o *EditionUpdateRequestDTO) SetCollaborators(v string)`

SetCollaborators sets Collaborators field to given value.

### HasCollaborators

`func (o *EditionUpdateRequestDTO) HasCollaborators() bool`

HasCollaborators returns a boolean if a field has been set.

### SetCollaboratorsNil

`func (o *EditionUpdateRequestDTO) SetCollaboratorsNil(b bool)`

 SetCollaboratorsNil sets the value for Collaborators to be an explicit nil

### UnsetCollaborators
`func (o *EditionUpdateRequestDTO) UnsetCollaborators()`

UnsetCollaborators ensures that no value is present for Collaborators, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


