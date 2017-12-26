/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */

let root = {
    val = 5,
    left = {
        val = 4,
        left = {
            val = 11,
            left = {
                val = 7,
                left = null,
                right = null
            },
            right = {
                val = 2,
                left = null,
                right = null
            }
        },
        right = null
    },
    right = {
        val = 8,
        left = {
            val = 13,
            left = null,
            right = null
        },
        right = {
            val = 4,
            left = {
                val = 5,
                left = null,
                right = null
            },
            right = {
                val = 1,
                left = null,
                right = null
            }
        }
    }
}

var pathSum = function(root, sum) {
    let q = [],
        result = []
    
    searchSum = function(root, sum){
        if(!root) return 

        q.push(root.val)

        if(!root.left && !root.right && sum - root.val === 0){
            result.push(q.slice())
        }

        sum -= root.val
        searchSum(root.left, sum)
        searchSum(root.right, sum)

        q.pop()
    }

    searchSum(root, sum)

    return result
};