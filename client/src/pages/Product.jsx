import { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets.js';

const Product = () => {
    const [completedQuestions, setCompletedQuestions] = useState({});

    const questions = [
        { id: 1, name: "Two Sum", link: "https://leetcode.com/problems/two-sum/" },
        { id: 2, name: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/" },
        { id: 3, name: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/" },
        { id: 4, name: "Binary Tree Inorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
        { id: 5, name: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/" },
        { id: 6, name: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
        { id: 7, name: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
        { id: 8, name: "Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate/" },
        { id: 9, name: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
        { id: 10, name: "Palindrome Number", link: "https://leetcode.com/problems/palindrome-number/" },
        { id: 11, name: "Remove Duplicates from Sorted Array", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
        { id: 12, name: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/" },
        { id: 13, name: "Binary Search", link: "https://leetcode.com/problems/binary-search/" },
        { id: 14, name: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/" },
        { id: 15, name: "Implement Queue using Stacks", link: "https://leetcode.com/problems/implement-queue-using-stacks/" },
        { id: 16, name: "First Bad Version", link: "https://leetcode.com/problems/first-bad-version/" },
        { id: 17, name: "Ransom Note", link: "https://leetcode.com/problems/ransom-note/" },
        { id: 18, name: "Lowest Common Ancestor of BST", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
        { id: 19, name: "Balanced Binary Tree", link: "https://leetcode.com/problems/balanced-binary-tree/" },
        { id: 20, name: "Flood Fill", link: "https://leetcode.com/problems/flood-fill/" },
        { id: 21, name: "3Sum", link: "https://leetcode.com/problems/3sum/" },
        { id: 22, name: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self/" },
        { id: 23, name: "Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/" },
        { id: 24, name: "Insert Interval", link: "https://leetcode.com/problems/insert-interval/" },
        { id: 25, name: "01 Matrix", link: "https://leetcode.com/problems/01-matrix/" },
        { id: 26, name: "K Closest Points to Origin", link: "https://leetcode.com/problems/k-closest-points-to-origin/" },
        { id: 27, name: "Longest Substring Without Repeating", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
        { id: 28, name: "String to Integer (atoi)", link: "https://leetcode.com/problems/string-to-integer-atoi/" },
        { id: 29, name: "3Sum Closest", link: "https://leetcode.com/problems/3sum-closest/" },
        { id: 30, name: "Permutations", link: "https://leetcode.com/problems/permutations/" },
        { id: 31, name: "Rotate Image", link: "https://leetcode.com/problems/rotate-image/" },
        { id: 32, name: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/" },
        { id: 33, name: "Maximum Product Subarray", link: "https://leetcode.com/problems/maximum-product-subarray/" },
        { id: 34, name: "Find Minimum in Rotated Sorted Array", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
        { id: 35, name: "House Robber", link: "https://leetcode.com/problems/house-robber/" },
        { id: 36, name: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/" },
        { id: 37, name: "Reverse Bits", link: "https://leetcode.com/problems/reverse-bits/" },
        { id: 38, name: "Course Schedule", link: "https://leetcode.com/problems/course-schedule/" },
        { id: 39, name: "Implement Trie", link: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
        { id: 40, name: "Word Search", link: "https://leetcode.com/problems/word-search/" },
        { id: 41, name: "Find Kth Largest Element", link: "https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/" },
        { id: 42, name: "Spiral Matrix", link: "https://leetcode.com/problems/spiral-matrix/" },
        { id: 43, name: "Jump Game", link: "https://leetcode.com/problems/jump-game/" },
        { id: 44, name: "Unique Paths", link: "https://leetcode.com/problems/unique-paths/" },
        { id: 45, name: "Coin Change", link: "https://leetcode.com/problems/coin-change/" },
        { id: 46, name: "Longest Increasing Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/" },
        { id: 47, name: "Word Break", link: "https://leetcode.com/problems/word-break/" },
        { id: 48, name: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/" },
        { id: 49, name: "House Robber II", link: "https://leetcode.com/problems/house-robber-ii/" },
        { id: 50, name: "Decode Ways", link: "https://leetcode.com/problems/decode-ways/" }
    ];

    const toggleQuestion = (questionId) => {
        setCompletedQuestions(prev => ({
            ...prev,
            [questionId]: !prev[questionId]
        }));
    };

    const completedCount = Object.values(completedQuestions).filter(Boolean).length;

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, minHeight: '100vh' }}>
            {/* Header */}
            <div style={{ padding: '20px', borderBottom: '1px solid #eee', backgroundColor: '#f8f9fa' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={assets.logo} alt="logo" height={32} width={32} style={{ marginRight: '10px' }} />
                        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#6a5af9' }}>DSA Practice</h1>
                    </div>
                    <div>
                        <Link to="/" style={{ textDecoration: 'none', color: '#6a5af9' }}>Home</Link>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>
                        50 Essential DSA Problems
                    </h2>
                    <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>
                        Master these fundamental problems to ace your coding interviews
                    </p>
                    
                    {/* Progress Bar */}
                    <div style={{ 
                        backgroundColor: '#e9ecef', 
                        borderRadius: '10px', 
                        height: '20px', 
                        margin: '0 auto 20px', 
                        maxWidth: '400px',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            backgroundColor: '#6a5af9',
                            height: '100%',
                            width: `${(completedCount / 50) * 100}%`,
                            transition: 'width 0.3s ease',
                            borderRadius: '10px'
                        }}></div>
                    </div>
                    
                    <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#6a5af9' }}>
                        {completedCount} / 50 Completed ({Math.round((completedCount / 50) * 100)}%)
                    </div>
                </div>

                {/* Questions Table */}
                <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#6a5af9', color: 'white' }}>
                                <th style={{ padding: '15px', textAlign: 'left', width: '80px' }}>Status</th>
                                <th style={{ padding: '15px', textAlign: 'left', width: '80px' }}>No.</th>
                                <th style={{ padding: '15px', textAlign: 'left' }}>Problem Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions.map((question, index) => (
                                <tr 
                                    key={question.id} 
                                    style={{ 
                                        backgroundColor: completedQuestions[question.id] ? '#d4edda' : (index % 2 === 0 ? '#f8f9fa' : 'white'),
                                        borderBottom: '1px solid #dee2e6'
                                    }}
                                >
                                    <td style={{ padding: '15px' }}>
                                        <input 
                                            type="checkbox"
                                            checked={completedQuestions[question.id] || false}
                                            onChange={() => toggleQuestion(question.id)}
                                            style={{ 
                                                width: '18px', 
                                                height: '18px', 
                                                cursor: 'pointer',
                                                accentColor: '#6a5af9'
                                            }}
                                        />
                                    </td>
                                    <td style={{ 
                                        padding: '15px', 
                                        fontWeight: 'bold', 
                                        color: '#6a5af9' 
                                    }}>
                                        {question.id}
                                    </td>
                                    <td style={{ padding: '15px' }}>
                                        <a 
                                            href={question.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            style={{ 
                                                textDecoration: 'none', 
                                                color: completedQuestions[question.id] ? '#155724' : '#212529',
                                                fontSize: '16px',
                                                fontWeight: completedQuestions[question.id] ? 'bold' : 'normal',
                                                transition: 'color 0.3s ease'
                                            }}
                                            onMouseOver={(e) => e.target.style.color = '#6a5af9'}
                                            onMouseOut={(e) => e.target.style.color = completedQuestions[question.id] ? '#155724' : '#212529'}
                                        >
                                            {question.name}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer Stats */}
                <div style={{ 
                    marginTop: '30px', 
                    padding: '20px', 
                    backgroundColor: '#f8f9fa', 
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                        <div style={{ margin: '10px' }}>
                            <h3 style={{ color: '#6a5af9', margin: '0 0 5px 0' }}>{50 - completedCount}</h3>
                            <p style={{ margin: 0, color: '#666' }}>Remaining</p>
                        </div>
                        <div style={{ margin: '10px' }}>
                            <h3 style={{ color: '#28a745', margin: '0 0 5px 0' }}>{completedCount}</h3>
                            <p style={{ margin: 0, color: '#666' }}>Completed</p>
                        </div>
                        <div style={{ margin: '10px' }}>
                            <h3 style={{ color: '#6a5af9', margin: '0 0 5px 0' }}>{Math.round((completedCount / 50) * 100)}%</h3>
                            <p style={{ margin: 0, color: '#666' }}>Progress</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
