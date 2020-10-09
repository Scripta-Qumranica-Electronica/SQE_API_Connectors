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


class EditionUpdateRequestDTO(object):
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
        'metrics': 'UpdateEditionManuscriptMetricsDTO',
        'name': 'str',
        'copyright_holder': 'str',
        'collaborators': 'str'
    }

    attribute_map = {
        'metrics': 'metrics',
        'name': 'name',
        'copyright_holder': 'copyrightHolder',
        'collaborators': 'collaborators'
    }

    def __init__(self, metrics=None, name=None, copyright_holder=None, collaborators=None, local_vars_configuration=None):  # noqa: E501
        """EditionUpdateRequestDTO - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._metrics = None
        self._name = None
        self._copyright_holder = None
        self._collaborators = None
        self.discriminator = None

        self.metrics = metrics
        self.name = name
        self.copyright_holder = copyright_holder
        self.collaborators = collaborators

    @property
    def metrics(self):
        """Gets the metrics of this EditionUpdateRequestDTO.  # noqa: E501


        :return: The metrics of this EditionUpdateRequestDTO.  # noqa: E501
        :rtype: UpdateEditionManuscriptMetricsDTO
        """
        return self._metrics

    @metrics.setter
    def metrics(self, metrics):
        """Sets the metrics of this EditionUpdateRequestDTO.


        :param metrics: The metrics of this EditionUpdateRequestDTO.  # noqa: E501
        :type metrics: UpdateEditionManuscriptMetricsDTO
        """

        self._metrics = metrics

    @property
    def name(self):
        """Gets the name of this EditionUpdateRequestDTO.  # noqa: E501


        :return: The name of this EditionUpdateRequestDTO.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this EditionUpdateRequestDTO.


        :param name: The name of this EditionUpdateRequestDTO.  # noqa: E501
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
    def copyright_holder(self):
        """Gets the copyright_holder of this EditionUpdateRequestDTO.  # noqa: E501


        :return: The copyright_holder of this EditionUpdateRequestDTO.  # noqa: E501
        :rtype: str
        """
        return self._copyright_holder

    @copyright_holder.setter
    def copyright_holder(self, copyright_holder):
        """Sets the copyright_holder of this EditionUpdateRequestDTO.


        :param copyright_holder: The copyright_holder of this EditionUpdateRequestDTO.  # noqa: E501
        :type copyright_holder: str
        """

        self._copyright_holder = copyright_holder

    @property
    def collaborators(self):
        """Gets the collaborators of this EditionUpdateRequestDTO.  # noqa: E501


        :return: The collaborators of this EditionUpdateRequestDTO.  # noqa: E501
        :rtype: str
        """
        return self._collaborators

    @collaborators.setter
    def collaborators(self, collaborators):
        """Sets the collaborators of this EditionUpdateRequestDTO.


        :param collaborators: The collaborators of this EditionUpdateRequestDTO.  # noqa: E501
        :type collaborators: str
        """

        self._collaborators = collaborators

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
        if not isinstance(other, EditionUpdateRequestDTO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, EditionUpdateRequestDTO):
            return True

        return self.to_dict() != other.to_dict()
