# coding: utf-8

"""
    SQE API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: v1
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from openapi_client.configuration import Configuration


class UpdateArtefactDTO(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'mask': 'str',
        'placement': 'PlacementDTO',
        'name': 'str',
        'status_message': 'str'
    }

    attribute_map = {
        'mask': 'mask',
        'placement': 'placement',
        'name': 'name',
        'status_message': 'statusMessage'
    }

    def __init__(self, mask=None, placement=None, name=None, status_message=None, local_vars_configuration=None):  # noqa: E501
        """UpdateArtefactDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._mask = None
        self._placement = None
        self._name = None
        self._status_message = None
        self.discriminator = None

        self.mask = mask
        self.placement = placement
        self.name = name
        self.status_message = status_message

    @property
    def mask(self):
        """Gets the mask of this UpdateArtefactDTO.  # noqa: E501


        :return: The mask of this UpdateArtefactDTO.  # noqa: E501
        :rtype: str
        """
        return self._mask

    @mask.setter
    def mask(self, mask):
        """Sets the mask of this UpdateArtefactDTO.


        :param mask: The mask of this UpdateArtefactDTO.  # noqa: E501
        :type mask: str
        """

        self._mask = mask

    @property
    def placement(self):
        """Gets the placement of this UpdateArtefactDTO.  # noqa: E501


        :return: The placement of this UpdateArtefactDTO.  # noqa: E501
        :rtype: PlacementDTO
        """
        return self._placement

    @placement.setter
    def placement(self, placement):
        """Sets the placement of this UpdateArtefactDTO.


        :param placement: The placement of this UpdateArtefactDTO.  # noqa: E501
        :type placement: PlacementDTO
        """

        self._placement = placement

    @property
    def name(self):
        """Gets the name of this UpdateArtefactDTO.  # noqa: E501


        :return: The name of this UpdateArtefactDTO.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this UpdateArtefactDTO.


        :param name: The name of this UpdateArtefactDTO.  # noqa: E501
        :type name: str
        """
        if (self.local_vars_configuration.client_side_validation and
                name is not None and len(name) > 255):
            raise ValueError("Invalid value for `name`, length must be less than or equal to `255`")  # noqa: E501
        if (self.local_vars_configuration.client_side_validation and
                name is not None and len(name) < 1):
            raise ValueError("Invalid value for `name`, length must be greater than or equal to `1`")  # noqa: E501

        self._name = name

    @property
    def status_message(self):
        """Gets the status_message of this UpdateArtefactDTO.  # noqa: E501


        :return: The status_message of this UpdateArtefactDTO.  # noqa: E501
        :rtype: str
        """
        return self._status_message

    @status_message.setter
    def status_message(self, status_message):
        """Sets the status_message of this UpdateArtefactDTO.


        :param status_message: The status_message of this UpdateArtefactDTO.  # noqa: E501
        :type status_message: str
        """

        self._status_message = status_message

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, UpdateArtefactDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, UpdateArtefactDTO):
            return True

        return self.to_dict() != other.to_dict()
