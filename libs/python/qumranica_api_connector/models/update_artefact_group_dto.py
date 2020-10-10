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

from qumranica_api_connector.configuration import Configuration


class UpdateArtefactGroupDTO(object):
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
        'name': 'str',
        'artefacts': 'list[int]'
    }

    attribute_map = {
        'name': 'name',
        'artefacts': 'artefacts'
    }

    def __init__(self, name=None, artefacts=None, local_vars_configuration=None):  # noqa: E501
        """UpdateArtefactGroupDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._name = None
        self._artefacts = None
        self.discriminator = None

        self.name = name
        self.artefacts = artefacts

    @property
    def name(self):
        """Gets the name of this UpdateArtefactGroupDTO.  # noqa: E501


        :return: The name of this UpdateArtefactGroupDTO.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this UpdateArtefactGroupDTO.


        :param name: The name of this UpdateArtefactGroupDTO.  # noqa: E501
        :type: str
        """
        if (self.local_vars_configuration.client_side_validation and
                name is not None and len(name) > 255):
            raise ValueError("Invalid value for `name`, length must be less than or equal to `255`")  # noqa: E501

        self._name = name

    @property
    def artefacts(self):
        """Gets the artefacts of this UpdateArtefactGroupDTO.  # noqa: E501


        :return: The artefacts of this UpdateArtefactGroupDTO.  # noqa: E501
        :rtype: list[int]
        """
        return self._artefacts

    @artefacts.setter
    def artefacts(self, artefacts):
        """Sets the artefacts of this UpdateArtefactGroupDTO.


        :param artefacts: The artefacts of this UpdateArtefactGroupDTO.  # noqa: E501
        :type: list[int]
        """
        if self.local_vars_configuration.client_side_validation and artefacts is None:  # noqa: E501
            raise ValueError("Invalid value for `artefacts`, must not be `None`")  # noqa: E501

        self._artefacts = artefacts

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
        if not isinstance(other, UpdateArtefactGroupDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, UpdateArtefactGroupDTO):
            return True

        return self.to_dict() != other.to_dict()
