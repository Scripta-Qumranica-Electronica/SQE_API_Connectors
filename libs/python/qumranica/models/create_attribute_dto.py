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

from qumranica.configuration import Configuration


class CreateAttributeDTO(object):
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
        'attribute_name': 'str',
        'values': 'list[CreateAttributeValueDTO]',
        'description': 'str',
        'editable': 'bool',
        'removable': 'bool',
        'repeatable': 'bool',
        'batch_editable': 'bool'
    }

    attribute_map = {
        'attribute_name': 'attributeName',
        'values': 'values',
        'description': 'description',
        'editable': 'editable',
        'removable': 'removable',
        'repeatable': 'repeatable',
        'batch_editable': 'batchEditable'
    }

    def __init__(self, attribute_name=None, values=None, description=None, editable=None, removable=None, repeatable=None, batch_editable=None, local_vars_configuration=None):  # noqa: E501
        """CreateAttributeDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._attribute_name = None
        self._values = None
        self._description = None
        self._editable = None
        self._removable = None
        self._repeatable = None
        self._batch_editable = None
        self.discriminator = None

        self.attribute_name = attribute_name
        self.values = values
        self.description = description
        if editable is not None:
            self.editable = editable
        if removable is not None:
            self.removable = removable
        if repeatable is not None:
            self.repeatable = repeatable
        if batch_editable is not None:
            self.batch_editable = batch_editable

    @property
    def attribute_name(self):
        """Gets the attribute_name of this CreateAttributeDTO.  # noqa: E501


        :return: The attribute_name of this CreateAttributeDTO.  # noqa: E501
        :rtype: str
        """
        return self._attribute_name

    @attribute_name.setter
    def attribute_name(self, attribute_name):
        """Sets the attribute_name of this CreateAttributeDTO.


        :param attribute_name: The attribute_name of this CreateAttributeDTO.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and attribute_name is None:  # noqa: E501
            raise ValueError("Invalid value for `attribute_name`, must not be `None`")  # noqa: E501

        self._attribute_name = attribute_name

    @property
    def values(self):
        """Gets the values of this CreateAttributeDTO.  # noqa: E501


        :return: The values of this CreateAttributeDTO.  # noqa: E501
        :rtype: list[CreateAttributeValueDTO]
        """
        return self._values

    @values.setter
    def values(self, values):
        """Sets the values of this CreateAttributeDTO.


        :param values: The values of this CreateAttributeDTO.  # noqa: E501
        :type: list[CreateAttributeValueDTO]
        """
        if self.local_vars_configuration.client_side_validation and values is None:  # noqa: E501
            raise ValueError("Invalid value for `values`, must not be `None`")  # noqa: E501

        self._values = values

    @property
    def description(self):
        """Gets the description of this CreateAttributeDTO.  # noqa: E501


        :return: The description of this CreateAttributeDTO.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this CreateAttributeDTO.


        :param description: The description of this CreateAttributeDTO.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def editable(self):
        """Gets the editable of this CreateAttributeDTO.  # noqa: E501


        :return: The editable of this CreateAttributeDTO.  # noqa: E501
        :rtype: bool
        """
        return self._editable

    @editable.setter
    def editable(self, editable):
        """Sets the editable of this CreateAttributeDTO.


        :param editable: The editable of this CreateAttributeDTO.  # noqa: E501
        :type: bool
        """

        self._editable = editable

    @property
    def removable(self):
        """Gets the removable of this CreateAttributeDTO.  # noqa: E501


        :return: The removable of this CreateAttributeDTO.  # noqa: E501
        :rtype: bool
        """
        return self._removable

    @removable.setter
    def removable(self, removable):
        """Sets the removable of this CreateAttributeDTO.


        :param removable: The removable of this CreateAttributeDTO.  # noqa: E501
        :type: bool
        """

        self._removable = removable

    @property
    def repeatable(self):
        """Gets the repeatable of this CreateAttributeDTO.  # noqa: E501


        :return: The repeatable of this CreateAttributeDTO.  # noqa: E501
        :rtype: bool
        """
        return self._repeatable

    @repeatable.setter
    def repeatable(self, repeatable):
        """Sets the repeatable of this CreateAttributeDTO.


        :param repeatable: The repeatable of this CreateAttributeDTO.  # noqa: E501
        :type: bool
        """

        self._repeatable = repeatable

    @property
    def batch_editable(self):
        """Gets the batch_editable of this CreateAttributeDTO.  # noqa: E501


        :return: The batch_editable of this CreateAttributeDTO.  # noqa: E501
        :rtype: bool
        """
        return self._batch_editable

    @batch_editable.setter
    def batch_editable(self, batch_editable):
        """Sets the batch_editable of this CreateAttributeDTO.


        :param batch_editable: The batch_editable of this CreateAttributeDTO.  # noqa: E501
        :type: bool
        """

        self._batch_editable = batch_editable

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
        if not isinstance(other, CreateAttributeDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, CreateAttributeDTO):
            return True

        return self.to_dict() != other.to_dict()
